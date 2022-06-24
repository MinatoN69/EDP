-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2021 at 10:23 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lifecare`
--

-- --------------------------------------------------------

--
-- Table structure for table `beds availability`
--

CREATE TABLE `beds availability` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `working hours` varchar(20) NOT NULL,
  `description` varchar(500) NOT NULL,
  `total beds` int(11) NOT NULL,
  `beds available` int(11) NOT NULL,
  `fees` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `beds availability`
--

INSERT INTO `beds availability` (`id`, `name`, `phone`, `working hours`, `description`, `total beds`, `beds available`, `fees`) VALUES
(1, 'G1 Hospitals', '9475632180', '24/7', 'Cardio and Orthopedic Specaility Center', 300, 120, 111),
(2, 'Apollo Hospitals', '9876543210', '24/7', 'Orthopedic Specaility Center', 200, 80, 551),
(3, 'Meenakshi Mission Hospitals', '9652336802', '24/7', 'Cardio Specaility Center', 250, 180, 294),
(4, 'MedIndia Hospitals', '9857413602', '24/7', 'Esophageal Lab and Intensive Digestive Care Unit', 350, 124, 138),
(5, 'Fortis Malar Hospital', '9854022433', '24/7', 'Distinguished Multi Super-specialty Corporate Hospital', 568, 200, 442),
(6, 'Aditya Hospital', '9965872236', '24/7', 'Neurosurgeons speciality center', 310, 20, 301),
(7, 'Ezhil Hospital', '96600254789', '24/7', 'Multi-Speciality hospital', 421, 60, 257),
(8, 'Gastro Care Hospital', '9652077432', '24/7', 'Gastrointestinal Surgery Clinic', 622, 200, 423),
(9, 'Karaikal Medical Centre', '9856147563', '24/7', 'General Physician Clinic', 312, 50, 304),
(10, 'Parvathy Ortho Hospital Private Limited', '9658230147', '24/7', 'Multi-speciality hospital', 190, 35, 495);

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE `hospitals` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `working hours` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospitals`
--

INSERT INTO `hospitals` (`username`, `password`, `name`, `working hours`, `email`, `phone`, `description`) VALUES
('G1 Hospitals', 'G123', 'G1 Hospitals', '24/7', 'logeshavanayyalu@gmail.com', '9475632180', 'Cardio and Orthopedic Speciality Center');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `name`, `email`, `phone`, `address`) VALUES
('logiitg', 'Logesh@2001', 'Logesh', 'logeshavanayyalu@gmail.com', '9486580410', '226-7-1 CO Colony');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `beds availability`
--
ALTER TABLE `beds availability`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `beds availability`
--
ALTER TABLE `beds availability`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
