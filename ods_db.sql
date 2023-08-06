-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2023 at 09:21 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ods_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `uname` varchar(25) NOT NULL,
  `passw` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`uname`, `passw`, `email`) VALUES
('Jyoti', '1000', 'jyoti@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `donar_reg`
--

CREATE TABLE `donar_reg` (
  `dname` varchar(25) NOT NULL,
  `gender` varchar(18) NOT NULL,
  `age` varchar(25) NOT NULL,
  `cnum` bigint(12) NOT NULL,
  `eid` varchar(30) NOT NULL,
  `adr` varchar(77) NOT NULL,
  `oname` varchar(31) NOT NULL,
  `sbgr` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donar_reg`
--

INSERT INTO `donar_reg` (`dname`, `gender`, `age`, `cnum`, `eid`, `adr`, `oname`, `sbgr`) VALUES
('Arya gajbhiye', 'Female', '21', 9425565804, 'arya@gmail.com', 'raipur devendra nagar', 'Lungs', 'A+'),
('Asha Singh', 'Female', '25', 6268018857, 'asha@gmail.com', 'chirimiri near lahiri college', 'Kidney', 'A-'),
('Bhumi Singh', 'Female', '25', 6268018857, 'bhumi@gmail.com', 'chirimiri near lahiri college', 'kidney', 'A-'),
('mitali gajbhiye', 'Female', '20', 8602957871, 'mitali@gmail.com', 'raipur devendra nagar', 'Liver', 'O+'),
('Shivani singh', 'Female', '28', 6538583528, 'shivi543@gmail.com', 'avanti vihar raipur', 'Liver', 'AB-');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `name` varchar(25) NOT NULL,
  `city` varchar(30) NOT NULL,
  `cnum` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `query` varchar(500) NOT NULL,
  `dt` varchar(15) NOT NULL,
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`name`, `city`, `cnum`, `email`, `query`, `dt`, `id`) VALUES
('parag patel', 'pandri, raipur', '665429960', 'parag@gmail.com', 'can i donate', '04-06-2023', 2),
('vishal choudhary', 'amanaka raipur', '7654865980', 'vishal@gmail.com', 'Can i live', '04-06-2023', 3),
('ankita singh', 'balaghat maharashtra', '08865734980', 'ankita@gmail.com', 'Hi welcome', '04-06-2023', 4),
('kratika Shah', 'ambikapur', '73856305992', 'krati@gmail.com', 'can i donate bone', '06-06-2023', 15),
('asha', 'ambikapur', '0997654537', 'ramya@gmail.com', 'can i donate my kidney ', '10-06-2023', 19),
('Shanaya sinha', 'Bilaspur, chattisgarh', '6799656453', 'shanaya@gmail.com', 'can i donate heart', '10-06-2023', 20),
('nishita singh', 'Annupur', '6556556386', 'nishu@gmail.com', 'can i donate cornea', '10-06-2023', 21),
('Shristi Jain', 'Mumbai ', '6658356550', 'Srishti@334gmail.com', 'i donate lungs', '10-06-2023', 22),
('Arti Jain', 'Manendragadh', '9954332230', 'arti435@gmail.com', 'can i donation cornea', '10-06-2023', 23);

-- --------------------------------------------------------

--
-- Table structure for table `organ`
--

CREATE TABLE `organ` (
  `oname` varchar(40) NOT NULL,
  `qty` int(4) NOT NULL,
  `img` blob NOT NULL,
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `organ`
--

INSERT INTO `organ` (`oname`, `qty`, `img`, `id`) VALUES
('Heart', 4, 0x68656172742e676966, 40),
('Lungs', 5, 0x6c756e67732e676966, 41),
('Liver', 3, 0x6c697665722e676966, 42),
('Kidney', 7, 0x6b69646e65792e676966, 43),
('Cornea', 10, 0x636f726e65612e676966, 44),
('Pancreas', 3, 0x70616e6372656173312e676966, 45),
('Bone Marrow', 9, 0x626f6e656d6172726f772e676966, 46),
('Heart Valve', 4, 0x686561727476616c76652e77656270, 47),
('Small Bowel', 3, 0x736d616c6c626f77656c2e676966, 48),
('Bone', 15, 0x626f6e652e676966, 49),
('Liver', 3, 0x6c69766572312e676966, 50);

-- --------------------------------------------------------

--
-- Table structure for table `receiver_reg`
--

CREATE TABLE `receiver_reg` (
  `pname` varchar(25) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` varchar(10) NOT NULL,
  `prob` varchar(25) NOT NULL,
  `orequire` varchar(25) NOT NULL,
  `cnum` varchar(32) NOT NULL,
  `adr` varchar(31) NOT NULL,
  `hname` varchar(29) NOT NULL,
  `sbg` varchar(25) NOT NULL,
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `receiver_reg`
--

INSERT INTO `receiver_reg` (`pname`, `gender`, `age`, `prob`, `orequire`, `cnum`, `adr`, `hname`, `sbg`, `id`) VALUES
('Abhigya Sinha', 'Female', '23', 'palpitations', 'Heart', '08602957871', 'raipur devendra nagar', 'Apollo', 'A+', 8),
('Nidhi Shah', 'Female', '23', 'Asthma', 'Lungs', '787940020', 'Indra Nagar Dongargarh', 'AIIMS', 'B-', 9),
('Kratika Shah', 'Female', '25', 'Cirrhosis', 'Liver', '9433267540', 'pandri raipur', 'Mayank Clinic', 'B+', 10),
('Komal Singh', 'Female', '20', 'Kidney Stone', 'Kidney', '09433267540', 'pandri raipur', 'Sai Hospital', 'B-', 11),
('bhumi singh', 'Female', '27', 'Endrocarditis', 'Heart', '9433267540', 'pandri raipur', 'APOLLO', 'O-', 17);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donar_reg`
--
ALTER TABLE `donar_reg`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organ`
--
ALTER TABLE `organ`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receiver_reg`
--
ALTER TABLE `receiver_reg`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `organ`
--
ALTER TABLE `organ`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `receiver_reg`
--
ALTER TABLE `receiver_reg`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
