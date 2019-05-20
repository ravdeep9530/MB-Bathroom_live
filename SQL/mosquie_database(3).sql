-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 26, 2017 at 07:28 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mosquie_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `LANGUAGES`
--

CREATE TABLE `LANGUAGES` (
  `languagesID` int(11) NOT NULL,
  `language_name` varchar(50) NOT NULL,
  `isActive` int(11) NOT NULL,
  `language_flag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `LANGUAGES`
--

INSERT INTO `LANGUAGES` (`languagesID`, `language_name`, `isActive`, `language_flag`) VALUES
(1, 'Punjabi', 1, 1),
(2, 'Hindi', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `L_BEAT_RANAGE`
--

CREATE TABLE `L_BEAT_RANAGE` (
  `range_id` int(11) NOT NULL,
  `tag_id` int(20) NOT NULL,
  `r_from` int(11) NOT NULL,
  `r_to` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `L_BEAT_RANAGE`
--

INSERT INTO `L_BEAT_RANAGE` (`range_id`, `tag_id`, `r_from`, `r_to`) VALUES
(1, 5, 1, 3),
(2, 2, 8, 10),
(3, 3, 8, 10),
(4, 6, 1, 3),
(5, 8, 4, 7),
(6, 4, 8, 10),
(7, 10, 4, 7),
(8, 4, 8, 10),
(9, 7, 1, 10),
(10, 1, 8, 10);

-- --------------------------------------------------------

--
-- Table structure for table `PEOPLE`
--

CREATE TABLE `PEOPLE` (
  `people_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` text,
  `password` text,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `hex` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `PEOPLE_LANGUAGE_CHOISE`
--

CREATE TABLE `PEOPLE_LANGUAGE_CHOISE` (
  `choise_id` int(11) NOT NULL,
  `people_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `PEOPLE_TRACK_CHOISE`
--

CREATE TABLE `PEOPLE_TRACK_CHOISE` (
  `choise_id` int(11) NOT NULL,
  `people_id` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `listening_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `times` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `TAGS`
--

CREATE TABLE `TAGS` (
  `l_tag_id` int(11) NOT NULL,
  `tag_name` varchar(50) NOT NULL,
  `isActive` int(11) NOT NULL,
  `tag_flag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TAGS`
--

INSERT INTO `TAGS` (`l_tag_id`, `tag_name`, `isActive`, `tag_flag`) VALUES
(1, 'ZYM', 1, 1),
(2, 'Bhanghra', 1, 1),
(3, 'Dance', 1, 1),
(4, 'Party', 1, 1),
(5, 'Sad', 1, 1),
(6, 'Heartbroken', 1, 1),
(7, 'Sufi', 1, 1),
(8, 'Love', 1, 1),
(10, 'Romantic', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `TRACKS`
--

CREATE TABLE `TRACKS` (
  `track_id` int(11) NOT NULL,
  `track_name` text NOT NULL,
  `track_duration` varchar(6) NOT NULL,
  `track_categoryID` int(11) NOT NULL,
  `track_languageID` int(11) NOT NULL,
  `track_entered_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` date NOT NULL,
  `modifiedByID` int(11) NOT NULL,
  `isActive` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TRACKS`
--

INSERT INTO `TRACKS` (`track_id`, `track_name`, `track_duration`, `track_categoryID`, `track_languageID`, `track_entered_date`, `modified_date`, `modifiedByID`, `isActive`) VALUES
(1, '2 Number', '4:03', 4, 1, '2017-12-16 10:41:58', '2017-12-18', 12, 1),
(2, '3 Peg', '3:24', 4, 1, '2017-12-16 10:44:59', '2017-12-16', 12, 1),
(3, '30 Bore', '2:32', 4, 1, '2017-12-16 10:47:09', '2017-12-16', 12, 1),
(4, 'Ashiq Tere', '3:35', 4, 1, '2017-12-16 10:49:17', '2017-12-16', 12, 1),
(5, 'Armaani', '', 1, 1, '2017-12-16 10:54:00', '2017-12-18', 12, 1),
(6, 'Asla', '3:29', 4, 1, '2017-12-16 10:56:16', '2017-12-16', 12, 1),
(7, 'Att Karti', '4:10', 4, 1, '2017-12-16 10:57:39', '2017-12-16', 12, 1),
(8, 'Baaki Baatein Peene Baad', '3:40', 2, 1, '2017-12-16 10:59:29', '2017-12-16', 12, 1),
(9, 'Badnaam', 'Aulakh', 3, 1, '2017-12-16 11:02:06', '2017-12-16', 12, 1),
(10, 'Bandook', '3:48', 2, 1, '2017-12-16 11:03:42', '2017-12-16', 12, 1),
(11, 'Bapu Zimidar', '3:00', 4, 1, '2017-12-16 11:05:02', '2017-12-16', 12, 1),
(12, 'Aadat', '4:06', 5, 1, '2017-12-16 11:09:43', '2017-12-16', 12, 1),
(13, 'Aadatan', '4:24', 5, 1, '2017-12-16 11:12:04', '2017-12-16', 12, 1),
(14, 'Adhi Adhi Raat', '3:54', 5, 1, '2017-12-16 11:14:18', '2017-12-16', 12, 1),
(15, 'Ae Jo Silli Silli and Narazgi', '4:52', 5, 1, '2017-12-16 11:18:21', '2017-12-16', 12, 1),
(16, 'Akhiyan Ch Paani', '6:29', 5, 1, '2017-12-16 11:20:10', '2017-12-16', 12, 1),
(17, 'Apan Dovey Rus Gaye', '5:42', 5, 1, '2017-12-16 11:22:00', '2017-12-16', 12, 1),
(18, 'Beparwaiyan', '4:09', 5, 1, '2017-12-16 11:24:23', '2017-12-16', 12, 1),
(19, 'Bewafa', '5:00', 5, 1, '2017-12-16 11:25:57', '2017-12-16', 12, 1),
(20, 'Bewafa', '3:00', 5, 1, '2017-12-16 11:27:56', '2017-12-16', 12, 1),
(21, 'Bewafa', '4:07', 5, 1, '2017-12-16 11:29:26', '2017-12-16', 12, 1),
(22, 'Bhull Jayin Na', '4:05', 5, 1, '2017-12-16 11:33:10', '2017-12-16', 12, 1),
(23, 'Botlan', '5:21', 5, 1, '2017-12-16 11:36:39', '2017-12-16', 12, 1),
(24, 'Chadd Gayi', '4:23', 5, 1, '2017-12-16 11:40:27', '2017-12-16', 12, 1),
(25, 'Churian ', '4:19', 6, 1, '2017-12-16 11:45:53', '2017-12-16', 12, 1),
(26, 'Cute Munda', '3:42', 6, 1, '2017-12-16 11:50:02', '2017-12-16', 12, 1),
(27, 'Dil Diyan', '', 6, 1, '2017-12-16 11:51:16', '2017-12-16', 12, 1),
(28, 'Dil De Varke', '', 6, 1, '2017-12-16 11:52:51', '2017-12-16', 12, 1),
(29, 'Dil Di dua', '', 1, 1, '2017-12-16 11:54:48', '2017-12-16', 12, 1),
(30, 'Aahun Aahun', '4:50', 2, 2, '2017-12-16 15:58:35', '2017-12-16', 12, 1),
(31, 'Abhi Toh Party Shuru Hui Hai', '2:59`', 2, 1, '2017-12-16 16:01:16', '2017-12-16', 12, 1),
(32, 'Afghan Jalebi', '3:43', 2, 1, '2017-12-16 16:03:01', '2017-12-16', 12, 1),
(33, 'Baby Doll', '', 2, 2, '2017-12-16 16:06:00', '2017-12-16', 12, 1),
(34, 'Badtameez dil', '4:30', 2, 2, '2017-12-16 16:08:25', '2017-12-16', 12, 1),
(35, 'Banno', '3:16', 2, 2, '2017-12-16 16:10:04', '2017-12-16', 12, 1),
(36, 'Bhaag D.k. Bose', '4:01', 2, 2, '2017-12-16 16:11:56', '2017-12-16', 12, 1),
(37, 'Bhaag Milkha Bhaag', '4:29', 2, 2, '2017-12-16 16:14:09', '2017-12-16', 12, 1),
(38, 'Daru Desi', '', 2, 2, '2017-12-16 16:19:07', '2017-12-16', 12, 1),
(39, 'Dj Waley Babu', '2:49', 3, 1, '2017-12-16 16:22:01', '2017-12-16', 12, 1),
(40, 'Engine Ki Seeti', '', 2, 2, '2017-12-16 16:25:25', '2017-12-16', 12, 1),
(41, 'Aahatein', '4:27', 5, 2, '2017-12-16 16:53:05', '2017-12-16', 12, 1),
(42, 'Aakhri Alvida', '4:39', 5, 2, '2017-12-16 16:55:16', '2017-12-16', 12, 1),
(43, 'Aaoge Jab Tum', '', 5, 2, '2017-12-16 16:58:05', '2017-12-16', 12, 1),
(44, 'Ab Phirse Jab Baarish', '', 5, 2, '2017-12-16 17:00:11', '2017-12-16', 12, 1),
(45, 'Ab To Aadat si Hai', '', 5, 2, '2017-12-16 17:02:00', '2017-12-16', 12, 1),
(46, 'Abhi Mujh Mein Kahin', '', 5, 2, '2017-12-16 17:04:17', '2017-12-16', 12, 1),
(47, 'Ae Dil Hai Mushkil', '', 5, 2, '2017-12-16 17:06:45', '2017-12-16', 12, 1),
(48, 'Ae Dil Kisi ki Yaad Mein', '', 5, 1, '2017-12-16 17:11:31', '2017-12-16', 12, 1),
(49, 'Alvida', '5:06', 5, 1, '2017-12-16 17:14:18', '2017-12-16', 12, 1),
(50, 'Alvida', '5:40', 5, 2, '2017-12-16 17:15:57', '2017-12-16', 12, 1),
(51, 'Awari', '', 5, 2, '2017-12-16 17:17:55', '2017-12-16', 12, 1),
(52, 'Baanware', '7:51', 5, 1, '2017-12-16 17:19:45', '2017-12-16', 12, 1),
(53, 'Baaton Ko Teri', '', 5, 2, '2017-12-16 17:21:01', '2017-12-16', 12, 1),
(54, 'Aa Bhi Ja Mere Humdum', '', 6, 2, '2017-12-16 17:25:24', '2017-12-16', 12, 1),
(55, 'Aa Jao Meri Tamanna', '', 6, 2, '2017-12-16 17:26:50', '2017-12-16', 12, 1),
(56, 'Aahista Aahista', '', 6, 2, '2017-12-16 17:28:37', '2017-12-16', 12, 1),
(57, 'Aaj Dil Shaayraana', '', 6, 2, '2017-12-16 17:29:35', '2017-12-16', 12, 1),
(58, 'Aaj Din Chadeya', '', 6, 2, '2017-12-16 17:30:46', '2017-12-18', 12, 1),
(59, 'Aao Milo Chale', '', 6, 1, '2017-12-16 17:33:09', '2017-12-16', 12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `TRACKS_DETAIL`
--

CREATE TABLE `TRACKS_DETAIL` (
  `detail_id` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `year` varchar(4) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `artist` varchar(100) NOT NULL,
  `album` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `lyrics` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TRACKS_DETAIL`
--

INSERT INTO `TRACKS_DETAIL` (`detail_id`, `track_id`, `year`, `genre`, `artist`, `album`, `description`, `lyrics`) VALUES
(1, 1, '2017', 'Bhangra', 'Bilal Saeed', 'Twelve', 'Dr Zeus', 'Bilal Saeed'),
(2, 2, '2017', 'Bhangra', 'Sharry Maan', 'Single', 'Mista Baaz', 'Ravi Raj'),
(3, 3, '2015', 'Bhangra', 'Dilpreet Dhillon', 'Single', '', ''),
(4, 4, '2011', 'Bhangra', 'Gippy Grewal', 'Single', '', ''),
(5, 5, '2012', 'Bhangra', 'Harman Chahal', 'Single', '', ''),
(6, 6, '2016', 'Bhangra', 'Gagan Kokri', 'Single', '', ''),
(7, 7, '2015', 'Bhangra', 'Jassi Gill', 'Single', '', ''),
(8, 8, '', 'Dance', 'Badshah', 'Single', '', ''),
(9, 9, '', 'HipHop', 'Mankirt', 'Single', '', ''),
(10, 10, '', 'HipHop', 'Badshah', 'Single', '', ''),
(11, 11, '', 'Bhangra', 'Jassi Gill', 'Single', '', ''),
(12, 12, '', 'Punjabi Sad', 'Ninja', 'Single', '', ''),
(13, 13, '', 'Punjabi Sad', 'Gurnazar', 'Single', '', ''),
(14, 14, '', 'Punjabi Sad', 'Bilal Saeed', 'Twelve', '', ''),
(15, 15, '2017', 'Punjabi Sad', 'Hans Raj Hans & Navraj', 'Mixtape', '', ''),
(16, 16, '', 'Punjabi Sad', 'Nachattar Gill', 'Ramzaan Yaar Diyan', '', ''),
(17, 17, '', 'Punjabi Sad', 'Hans Raj Hans ', 'Zakhmi Dil', '', ''),
(18, 18, '', 'Punjabi Sad', 'Jaz Dhami', 'Single', 'Dr Zeus', ''),
(19, 19, '', 'Punjabi Sad', 'Pav Dharia', 'Single', '', ''),
(20, 20, '', 'Punjabi Sad', 'Imran khan', 'Single', '', ''),
(21, 21, '', 'Punjabi Sad', 'Gurnazar & Millind Gaba', 'Single', '', ''),
(22, 22, '', 'Punjabi Sad', 'Sharry Maan', 'Aate Di Chiri', '', ''),
(23, 23, '', 'Punjabi Sad', 'Jassi Gill', 'Replay Return Of Melody', '', ''),
(24, 24, '', 'Punjabi Sad', 'Guru', 'Single', '', ''),
(25, 25, '', 'Punjabi Love', 'Jassi Gill', 'Batchmate', '', ''),
(26, 26, '', 'Punjabi Love', 'Sharry Maan', 'Single', '', ''),
(27, 27, '', 'Punjabi Love', 'Diljit ', 'Single', '', ''),
(28, 28, '', 'Punjabi Love', 'Roshan Prince', 'Single', '', ''),
(29, 29, '', 'Punjabi Love', 'Amrinder Gill', 'Bhalwan Singh', '', ''),
(30, 30, '', 'Bollywood', 'Master Saleem, Neeraj Shridhar, Suzanne D\'Mello', 'Love Aaj Kal', 'Pritam Chakraborty', 'Irshad Kamil'),
(31, 31, '', 'Bollywood', 'Badshah,Aastha', 'Khoobsurat', '', ''),
(32, 32, '', 'Bollywood', 'Asrar', 'Phantom', '', ''),
(33, 33, '', 'Bollywood', 'Kanika', 'Raghani MMS 2', '', ''),
(34, 34, '', 'Bollywood', 'Benny Dayal', 'Yeh Jawaani Hai Deewani', '', ''),
(35, 35, '', 'Bollywood', 'Brijesh Shandilya,Swati', 'Tanu Weds Manu Returns', '', ''),
(36, 36, '', 'Bollywood', 'Ram Sampath', 'Delhi Belly', '', ''),
(37, 37, '', 'Bollywood', 'Arif Lohar', 'Bhaag Milkha Bhaag', '', ''),
(38, 38, '', 'Bollywood', 'Benny Dayal, Shalmali Kholgade', 'Cocktail', '', ''),
(39, 39, '', 'Hindi Dance', 'Badshah', 'Single', '', ''),
(40, 40, '', 'Bollywood', 'Sunidhi Chauhan', 'Khoobsurat', '', ''),
(41, 41, '', 'Bollywood', 'Karthik, Shipla Rao', 'Ek Main Aur Ekk Tu', '', ''),
(42, 42, '', 'Bollywood', 'Strings', 'Shootouot At Lokhandwala', '', ''),
(43, 43, '', 'Bollywood', 'Rashid Khan', 'Jab We Met', '', ''),
(44, 44, '', 'Indipop', 'Darshan Raval', 'Single', '', ''),
(45, 45, '', 'Indipop', 'Jal The Band', 'Jal Pari', '', ''),
(46, 46, '', 'Bollywood', 'Sonu Nigam', 'Agneepath', '', ''),
(47, 47, '', 'Bollywood', 'Arjit Singh', 'Ae Dil Hai Mushkil', '', ''),
(48, 48, '', 'Coke Studio', 'Ali Zafar &Sara Haider', 'Coke Studio 8', '', ''),
(49, 49, '', 'Bollywood', 'Nikhil D\'Souza', 'D-Day', '', ''),
(50, 50, '', 'Bollywood', 'K.K.', 'K.K. Best Of Me', '', ''),
(51, 51, '', 'Bollywood', 'Soch The Band', 'Ek Villain', '', ''),
(52, 52, '', 'Coke Studio', 'Aima Baig ,Shuja Haider', 'Coke Studio 10', '', ''),
(53, 53, '', 'Bollywood', 'Arijit Singh', 'All Is Well', '', ''),
(54, 54, '', 'Indipop', 'Band Of Boys', 'Gaane Bhi De Yaaro', '', ''),
(55, 55, '', 'Bollywood', 'Javed Ali', 'Ajab Prem Ki ghazab Kahani', '', ''),
(56, 56, '', 'Bollywood', 'Lucky Ali', 'Bachna Ae Haseeno', '', ''),
(57, 57, '', 'Bollywood', 'Arijit Singh', 'Holiday', '', ''),
(58, 58, '', 'Unplugged', 'Pritam', 'MTV Unplugged', '', ''),
(59, 59, '', 'Bollywood', 'Shaan, Sultan Khan', 'Jab We Met', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `TRACKS_LINK`
--

CREATE TABLE `TRACKS_LINK` (
  `track_linkID` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `track_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TRACKS_LINK`
--

INSERT INTO `TRACKS_LINK` (`track_linkID`, `track_id`, `track_url`) VALUES
(1, 5, 'Armaaani.mp3'),
(2, 29, 'Dil Di Dua Bhalwan Singh - Amrinder Gill (DJJOhAL.Com).mp3'),
(3, 8, 'Baaki Baatein Peene Baad (Shots)(Mr-Jatt.com).mp3'),
(4, 10, 'Bandook (DJJOhAL.Com).mp3'),
(5, 31, 'Abhi Toh Party Shuru Hui Hai f1ff85ad.mp3'),
(6, 32, 'Afghan Jalebi - DJMaza.Info.mp3'),
(7, 30, 'Aahun Aahun - www.Songs.PK.mp3'),
(8, 33, 'Baby Doll.mp3'),
(9, 34, 'Badtameez Dil.mp3'),
(10, 35, 'Banno - DJMaza.Info.mp3'),
(11, 36, 'Bhaag D.K. Bose, Aandhi Aayi - WapKing.cc.mp3'),
(12, 37, 'Bhaag Milkha Bhaag.mp3'),
(13, 38, 'Daru Desi.mp3'),
(14, 40, 'Engine Ki Seeti.mp3'),
(15, 9, 'Badnam - Mankirt Aulakh (DJJOhAL.Com).mp3'),
(16, 39, 'Dj Waley Babu (DJJOhAL.Com).mp3'),
(17, 1, '2 Number (feat. Dr. Zeus, Amrinder Gill & Young Fateh).mp3'),
(18, 2, '3 Peg - Sharry Mann (DJJOhAL.Com).mp3'),
(19, 3, '30_Bore-Dilpreet_Dhillon-www.Mp3Mad.Com.mp3'),
(20, 4, 'Ashiq Tere (RoyalJatt.Com).mp3'),
(21, 6, 'Asla (DjPunjab.CoM).mp3'),
(22, 7, 'Att Karti (DJJOhAL.Com).mp3'),
(23, 11, 'Bapu Zimidar (RoyalJatt.Com).mp3'),
(24, 12, 'Aadat (DjPunjab.CoM).mp3'),
(25, 13, 'Aadatan (feat. Sahil & DJ. G.K) (DJJOhAL.Com).mp3'),
(26, 14, 'Adhi Adhi Raat - MP3Khan.Com.mp3'),
(27, 15, 'Ae Jo Silli Silli and Narazgi - Hans Raj Hans Navraj Hans (DJJOhAL.Com).mp3'),
(28, 16, 'Akhiyan Ch Paani (DJJOhAL.Com).mp3'),
(29, 17, 'Apan Dovey Rus Gaye (RoyalJatt.Com).mp3'),
(30, 18, 'Beparwaiyan (DJJOhAL.Com).mp3'),
(31, 19, 'Bewafa.mp3'),
(32, 20, 'Bewafa 2.mp3'),
(33, 21, 'Bewafa Ft Millind Gaba (DJJOhAL.Com).mp3'),
(34, 22, 'Bhull Jayin Na.Mr-KHAN.CoM.mp3'),
(35, 23, 'Botlan (RoyalJatt.Com).mp3'),
(36, 24, 'Chhad_Gayi-Guru-www.Mp3Mad.Com.mp3'),
(37, 48, 'Ae Dil Kisi Ki Yaad Mein.mp3'),
(38, 49, 'Alvida - DownloadMing.SE.mp3'),
(39, 52, 'Baanware.mp3'),
(40, 41, 'Aahatein - www.Songs.PK.mp3'),
(41, 42, 'Aakhri Alvida.mp3'),
(42, 43, 'Aaoge Jab Tum.mp3'),
(43, 44, 'Ab Phirse Jab Baarish - DJMaza.Desi.mp3'),
(44, 45, 'Ab Tou Aadat Si Hai.mp3'),
(45, 46, 'Abhi Mujh Mein Kahin - www.Songs.PK.mp3'),
(46, 47, 'Ae Dil Hai Mushkil Title Track (DJJOhAL.Com).mp3'),
(47, 50, 'Alvida - MP3Khan.Com.mp3'),
(48, 51, 'Awari - Songspk.name.mp3'),
(49, 53, 'Baaton Ko Teri - DJMaza.Info.mp3'),
(50, 25, 'Churhian.mp3'),
(51, 26, 'Cute Munda - Sharry Mann (DJJOhAL.Com).mp3'),
(52, 27, 'Dil deyian.mp3'),
(53, 28, 'Dil De Varke.mp3'),
(54, 59, 'Aao Milo Chalo.mp3'),
(55, 54, 'Aa Bhi Ja Mere Humdum (RoyalJatt.Com).mp3'),
(56, 55, 'Aa Jao Meri Tamanna - www.Songs.PK.mp3'),
(57, 56, 'Aahista Aahista (Bachna Ae Haseeno) - DJMaza.Info.mp3'),
(58, 57, 'Aaj Dil Shaayraana - DJMaza.Info.mp3'),
(59, 58, 'Aaj Dil Shaayraana - DJMaza.Info.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `TRACK_CATEGORY`
--

CREATE TABLE `TRACK_CATEGORY` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `isActive` int(11) NOT NULL,
  `category_flag` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TRACK_CATEGORY`
--

INSERT INTO `TRACK_CATEGORY` (`category_id`, `category_name`, `isActive`, `category_flag`) VALUES
(1, 'Folk', 1, b'1'),
(2, 'Dance', 1, b'1'),
(3, 'HipHop', 1, b'1'),
(4, 'Bhangra', 1, b'1'),
(5, 'SAD', 1, b'1'),
(6, 'Love', 1, b'1');

-- --------------------------------------------------------

--
-- Table structure for table `TRACK_TAGS`
--

CREATE TABLE `TRACK_TAGS` (
  `tag_id` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `tags` text NOT NULL,
  `beat` int(11) NOT NULL,
  `tempo` int(11) NOT NULL,
  `other_string` text,
  `other_int` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TRACK_TAGS`
--

INSERT INTO `TRACK_TAGS` (`tag_id`, `track_id`, `tags`, `beat`, `tempo`, `other_string`, `other_int`) VALUES
(1, 1, '0:ZYM,1:Bhanghra,2:Dance,3:Sad,', 8, 2, NULL, NULL),
(2, 2, '0:ZYM,1:Bhanghra,2:Dance,3:Party,', 9, 3, NULL, NULL),
(3, 3, '0:ZYM,1:Bhanghra,2:Dance,3:Party,', 8, 1, NULL, NULL),
(4, 4, '0:ZYM,1:Bhanghra,2:Dance,3:Party,', 8, 2, NULL, NULL),
(5, 5, '0:ZYM,', 8, 1, NULL, NULL),
(6, 6, '0:ZYM,1:Bhanghra,2:Dance,3:Party,', 9, 3, NULL, NULL),
(7, 7, '0:ZYM,1:Bhanghra,2:Dance,3:Party,', 9, 3, NULL, NULL),
(8, 8, '0:ZYM,1:Dance,2:Party,', 9, 1, NULL, NULL),
(9, 9, '0:ZYM,1:Party,', 8, 1, NULL, NULL),
(10, 10, '0:ZYM,', 9, 2, NULL, NULL),
(11, 11, '0:ZYM,1:Bhanghra,2:Dance,3:Party,', 10, 2, NULL, NULL),
(12, 12, '0:Sad,1:Heartbroken,2:Sufi,', 3, 2, NULL, NULL),
(13, 13, '0:Sad,1:Heartbroken,', 3, 3, NULL, NULL),
(14, 14, '0:Sad,1:Heartbroken,', 3, 2, NULL, NULL),
(15, 15, '0:Sad,1:Heartbroken,', 1, 1, NULL, NULL),
(16, 16, '0:Sad,1:Heartbroken,', 1, 2, NULL, NULL),
(17, 17, '0:Sad,', 1, 1, NULL, NULL),
(18, 18, '0:Sad,', 3, 2, NULL, NULL),
(19, 19, '0:Sad,1:Heartbroken,', 3, 3, NULL, NULL),
(20, 20, '0:Sad,1:Heartbroken,', 2, 1, NULL, NULL),
(21, 21, '0:Sad,1:Heartbroken,', 3, 3, NULL, NULL),
(22, 22, '0:Sad,1:Love,', 2, 2, NULL, NULL),
(23, 23, '0:Sad,1:Heartbroken,', 3, 3, NULL, NULL),
(24, 24, '0:Sad,', 3, 2, NULL, NULL),
(25, 25, '0:Love,1:Romantic,', 5, 1, NULL, NULL),
(26, 26, '0:Love,1:Romantic,2:Bhanghra,3:Dance,4:Party,', 6, 3, NULL, NULL),
(27, 27, '0:Love,1:Romantic,', 5, 1, NULL, NULL),
(28, 28, '0:Love,1:Romantic,', 5, 2, NULL, NULL),
(29, 29, '0:Love,1:Romantic,', 4, 1, NULL, NULL),
(30, 30, '0:Bhanghra,1:ZYM,2:Dance,3:Party,4:Love,5:Romantic,', 8, 3, NULL, NULL),
(31, 31, '0:ZYM,1:Dance,2:Party,', 9, 3, NULL, NULL),
(32, 32, '0:Dance,1:ZYM,2:Party,', 8, 2, NULL, NULL),
(33, 33, '0:Dance,1:Party,', 7, 1, NULL, NULL),
(34, 34, '0:Dance,1:Party,2:ZYM,', 8, 2, NULL, NULL),
(35, 35, '0:Dance,1:Party,', 9, 3, NULL, NULL),
(36, 36, '0:Dance,1:ZYM,', 8, 3, NULL, NULL),
(37, 37, '0:ZYM,', 8, 1, NULL, NULL),
(38, 38, '0:Love,1:Romantic,2:Party,', 8, 1, NULL, NULL),
(39, 39, '0:Party,1:Dance,2:ZYM,', 8, 2, NULL, NULL),
(40, 40, '0:Dance,1:Party,', 9, 1, NULL, NULL),
(41, 41, '0:Sad,1:Heartbroken,', 1, 1, NULL, NULL),
(42, 42, '0:Sad,1:Heartbroken,', 2, 2, NULL, NULL),
(43, 43, '0:Sad,1:Heartbroken,', 1, 1, NULL, NULL),
(44, 44, '0:Sad,1:Heartbroken,', 1, 1, NULL, NULL),
(45, 45, '0:Sad,1:Heartbroken,', 3, 3, NULL, NULL),
(46, 46, '0:Sad,1:Heartbroken,', 2, 1, NULL, NULL),
(47, 47, '0:Sad,1:Heartbroken,', 3, 2, NULL, NULL),
(48, 48, '0:Sad,1:Heartbroken,', 2, 2, NULL, NULL),
(49, 49, '0:Sad,1:Heartbroken,', 1, 1, NULL, NULL),
(50, 50, '0:Sad,1:Heartbroken,', 3, 2, NULL, NULL),
(51, 51, '0:Sad,1:Heartbroken,', 3, 2, NULL, NULL),
(52, 52, '0:Sad,1:Heartbroken,', 2, 2, NULL, NULL),
(53, 53, '0:Sad,1:Heartbroken,', 2, 1, NULL, NULL),
(54, 54, '0:Love,1:Romantic,', 2, 1, NULL, NULL),
(55, 55, '0:Love,1:Romantic,', 3, 2, NULL, NULL),
(56, 56, '0:Love,1:Romantic,', 3, 2, NULL, NULL),
(57, 57, '0:Love,1:Romantic,', 3, 3, NULL, NULL),
(58, 58, '0:Love,1:Romantic,', 2, 2, NULL, NULL),
(59, 59, '0:Love,1:Romantic,', 2, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `LANGUAGES`
--
ALTER TABLE `LANGUAGES`
  ADD PRIMARY KEY (`languagesID`);

--
-- Indexes for table `L_BEAT_RANAGE`
--
ALTER TABLE `L_BEAT_RANAGE`
  ADD PRIMARY KEY (`range_id`),
  ADD KEY `beat_tag_fk` (`tag_id`);

--
-- Indexes for table `PEOPLE`
--
ALTER TABLE `PEOPLE`
  ADD PRIMARY KEY (`people_id`);

--
-- Indexes for table `PEOPLE_LANGUAGE_CHOISE`
--
ALTER TABLE `PEOPLE_LANGUAGE_CHOISE`
  ADD PRIMARY KEY (`choise_id`),
  ADD KEY `language&people_foreignK` (`language_id`),
  ADD KEY `people&lanuage_fk` (`people_id`);

--
-- Indexes for table `PEOPLE_TRACK_CHOISE`
--
ALTER TABLE `PEOPLE_TRACK_CHOISE`
  ADD PRIMARY KEY (`choise_id`),
  ADD KEY `people_tgrack_fk` (`track_id`);

--
-- Indexes for table `TAGS`
--
ALTER TABLE `TAGS`
  ADD PRIMARY KEY (`l_tag_id`);

--
-- Indexes for table `TRACKS`
--
ALTER TABLE `TRACKS`
  ADD PRIMARY KEY (`track_id`),
  ADD KEY `language_foreignK` (`track_languageID`),
  ADD KEY `category_foreignK` (`track_categoryID`);

--
-- Indexes for table `TRACKS_DETAIL`
--
ALTER TABLE `TRACKS_DETAIL`
  ADD PRIMARY KEY (`detail_id`),
  ADD KEY `trackID` (`track_id`);

--
-- Indexes for table `TRACKS_LINK`
--
ALTER TABLE `TRACKS_LINK`
  ADD PRIMARY KEY (`track_linkID`);

--
-- Indexes for table `TRACK_CATEGORY`
--
ALTER TABLE `TRACK_CATEGORY`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `TRACK_TAGS`
--
ALTER TABLE `TRACK_TAGS`
  ADD PRIMARY KEY (`tag_id`),
  ADD KEY `trackID_FK` (`track_id`);

--
-- Indexes for table `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `LANGUAGES`
--
ALTER TABLE `LANGUAGES`
  MODIFY `languagesID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `L_BEAT_RANAGE`
--
ALTER TABLE `L_BEAT_RANAGE`
  MODIFY `range_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `PEOPLE`
--
ALTER TABLE `PEOPLE`
  MODIFY `people_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PEOPLE_LANGUAGE_CHOISE`
--
ALTER TABLE `PEOPLE_LANGUAGE_CHOISE`
  MODIFY `choise_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PEOPLE_TRACK_CHOISE`
--
ALTER TABLE `PEOPLE_TRACK_CHOISE`
  MODIFY `choise_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TAGS`
--
ALTER TABLE `TAGS`
  MODIFY `l_tag_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `TRACKS`
--
ALTER TABLE `TRACKS`
  MODIFY `track_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `TRACKS_DETAIL`
--
ALTER TABLE `TRACKS_DETAIL`
  MODIFY `detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `TRACKS_LINK`
--
ALTER TABLE `TRACKS_LINK`
  MODIFY `track_linkID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `TRACK_CATEGORY`
--
ALTER TABLE `TRACK_CATEGORY`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `TRACK_TAGS`
--
ALTER TABLE `TRACK_TAGS`
  MODIFY `tag_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `USERS`
--
ALTER TABLE `USERS`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `L_BEAT_RANAGE`
--
ALTER TABLE `L_BEAT_RANAGE`
  ADD CONSTRAINT `beat_tag_fk` FOREIGN KEY (`tag_id`) REFERENCES `TAGS` (`l_tag_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PEOPLE_LANGUAGE_CHOISE`
--
ALTER TABLE `PEOPLE_LANGUAGE_CHOISE`
  ADD CONSTRAINT `language&people_foreignK` FOREIGN KEY (`language_id`) REFERENCES `LANGUAGES` (`languagesID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `people&lanuage_fk` FOREIGN KEY (`people_id`) REFERENCES `PEOPLE` (`people_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PEOPLE_TRACK_CHOISE`
--
ALTER TABLE `PEOPLE_TRACK_CHOISE`
  ADD CONSTRAINT `people_tgrack_fk` FOREIGN KEY (`track_id`) REFERENCES `TRACKS` (`track_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `TRACKS`
--
ALTER TABLE `TRACKS`
  ADD CONSTRAINT `category_foreignK` FOREIGN KEY (`track_categoryID`) REFERENCES `TRACK_CATEGORY` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `language_foreignK` FOREIGN KEY (`track_languageID`) REFERENCES `LANGUAGES` (`languagesID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `TRACKS_DETAIL`
--
ALTER TABLE `TRACKS_DETAIL`
  ADD CONSTRAINT `trackID` FOREIGN KEY (`track_id`) REFERENCES `TRACKS` (`track_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `TRACK_TAGS`
--
ALTER TABLE `TRACK_TAGS`
  ADD CONSTRAINT `trackID_FK` FOREIGN KEY (`track_id`) REFERENCES `TRACKS` (`track_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
