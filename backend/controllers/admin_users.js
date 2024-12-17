import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/admin_users.js'

export const Signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword
    });

    // Save user to database
    await newUser.save();

    // Generate JWT token
    // const token = jwt.sign(
    //   { userId: newUser._id },
    //   process.env.JWT_SECRET,
    //   { expiresIn: '1h' }
    // );

    res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
}


export const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password )

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login successful',
      token
      
    });
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({ message: 'Server error during signin' });
  }
}





export const Reset = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and new password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and new password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Optional: Verify old password (if provided)
   
    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Reset Password error:', error);
    res.status(500).json({ message: 'Server error during password reset' });
  }
};