import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import api from "../lib/api";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { Plus, Trash2, Clock, User, Calendar as CalendarIcon } from "lucide-react";

import {
  format,
  parseISO,
  isSameDay,
} from "date-fns";

import { toast } from "sonner";

export default function Admin() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  // Dialog states for creating a new slot
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [maxCapacity, setMaxCapacity] = useState(1);

  // Sync state with URL Search Params on initial load
  useEffect(() => {
    const dateParam = searchParams.get("date");
    if (dateParam) {
      const parsedDate = parseISO(dateParam);
      if (!isNaN(parsedDate)) {
        setSelectedDate(parsedDate);
      }
    }
  }, []);

  // Fetch slots whenever the selected date changes
  useEffect(() => {
    fetchSlots();
  }, [selectedDate]);

  const fetchSlots = async () => {
    setLoading(true);
    try {
      const dateString = format(selectedDate, "yyyy-MM-dd");
      const response = await api.get(`/admin/slots?date=${dateString}`);
      setSlots(response.data || []);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to fetch slots.");
    } finally {
      setLoading(false);
    }
  };

  const handleDateSelect = (date) => {
    if (!date) return;
    setSelectedDate(date);
    const dateString = format(date, "yyyy-MM-dd");
    setSearchParams({ date: dateString });
  };

  const handleCreateSlot = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        date: format(selectedDate, "yyyy-MM-dd"),
        startTime,
        endTime,
        capacity: Number(maxCapacity),
      };

      await api.post("/admin/slots", payload);
      toast.success("Slot created successfully");
      setIsModalOpen(false);
      fetchSlots();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Could not create slot");
    }
  };

  const handleDeleteSlot = async (slotId) => {
    try {
      await api.delete(`/admin/slots/${slotId}`);
      setSlots((prev) => prev.filter((slot) => slot.id !== slotId));
      toast.success("Slot deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete slot");
    }
  };

  const filteredSlots = slots.filter((slot) => {
    if (filterStatus === "booked") return slot.isBooked;
    if (filterStatus === "available") return !slot.isBooked;
    return true;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Manage daily schedule, time slots, and bookings.
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" /> Add Time Slot
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CalendarIcon className="h-5 w-5" /> Select Date
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Schedule & Slot List */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div>
              <CardTitle className="text-lg">
                Schedule for {format(selectedDate, "MMM dd, yyyy")}
              </CardTitle>
            </div>
            <div className="w-[180px]">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Slots</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="booked">Booked</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {loading ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                Loading schedule...
              </div>
            ) : filteredSlots.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground border border-dashed rounded-md">
                No time slots found for this date.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        {slot.startTime} - {slot.endTime}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3.5 w-3.5" />
                        {slot.isBooked ? (
                          <span className="text-destructive font-medium">
                            Booked ({slot.bookedBy || "Customer"})
                          </span>
                        ) : (
                          <span className="text-emerald-600 font-medium">
                            Available ({slot.capacity} spot)
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteSlot(slot.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Add Slot Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Slot</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateSlot} className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="date">Selected Date</Label>
              <Input
                id="date"
                value={format(selectedDate, "yyyy-MM-dd")}
                disabled
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  id="startTime"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endTime">End Time</Label>
                <Input
                  id="endTime"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="capacity">Capacity</Label>
              <Input
                id="capacity"
                type="number"
                min="1"
                value={maxCapacity}
                onChange={(e) => setMaxCapacity(e.target.value)}
                required
              />
            </div>
            <DialogFooter className="pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save Slot</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}