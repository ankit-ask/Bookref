﻿
   		function getsemester(sem)
   			{
   				localStorage.semester=sem;
   			}
   		function getbranch(br)
   			{
   				localStorage.branch=br;
   			}
   		var branches=['C.S','I.T','E.C','MECHANICAL','CIVIL'];
   		
   		


         var cssubjects=[/* 1 sem */'M-1','Physics','C.E.D','F.C.S.E','F.E.E',/* 2 sem */'M-2','Chemistry','English','E.G','D.S',/* 3 sem */'M-2','M-4','D.C.S','E.D.C','Data Structures',/* 4 sem */'M-3','C.S.O','O.O.T','Analysis&Design of Algo','A.D.C',/* 5 sem */'Data Comm.','O.S','D.B.M.S','Computer Graphics & Multimedia','T.O.C',/* 6 sem */'Micro-processor&Interfacing','P.P.L','Software Engg. & Project Management','Computer Networking','A.C.A',/* 7 sem */'Compiler Design','Disitributed System','Cloud Computing','I.S.M','Elective-I',/* 8 sem */'Soft Computing','Web Engg.','Elective-III','Elective-IV'];
   		
   		var itsubjects=[/* 1 sem */'M-1','Physics','C.E.D','F.C.S.E','F.E.E',/*2 sem */'M-2','Chemistry','English','E.G','D.S',/* 3 sem */'M-2','M-4','O.O.P.S','E.D.C','Data Structures',/* 4 sem */'M-3','C.S.O','D.B.M.S','Analysis&Design of Algo','A.D.C',/* 5 sem */'Data Comm.','I.S.M','Computer Networks','System Programming & O.S.','Java Programming',/* 6 sem */'Unix & Shell Programming','Computer Graphics & Multimedia','Internet Technology & Network Management','Web Technology','Software Engg. & Project Management',/* 7 sem */'Object Oriented Analysis','Wireless&Mobile Computing','Cloud Computing','Elective-I','Elective-II',/* 8 sem */'Information Security','Soft Computing','Elective-III','Elective-IV'];

   		var ecsubjects=[/* 1 sem */'M-1','Physics','C.E.D','F.C.S.E','F.E.E',/* 2 sem */'M-2','Chemistry','English','E.G','D.S',/* 3 sem */'M-2','C.S.O','E.I','Electronic Devices','Network Analysis',/* 4 sem */'M-3','Electromagnetic Theory','Digital Electronics','L.I.C','Analog Comm.',/* 5 sem */'Voice&Data Comm.','Control Systems','Digital Comm.','Microprocessors & Microcontrollers','Communication Networks & Transmission Lines',/* 6 sem */'Industrial Electronics','Cellular Mobile Comm.','D.S.P','A&W Propogation','VLSI Circuits&Systems',/* 7 sem */'Elective-I','Satellite Comm.','Optical Comm.','Microwave Engg.','VLSI Design',/* 8 sem */'Elective-II','Advanced Comm. System','Computer Networks','TV & Radar Engg.'];

   		var mesubjects=[/* 1 sem */'M-1','Physics','C.E.D','F.C.S.E','F.E.E',/* 2 sem */'M-2','Chemistry','English','E.G','D.S',/* 3 sem */'M-2','Production Process','S.O.M','Thermodynamics','M.D.D',/* 4 sem */'M-3','Material Sience & Metallurgy','Theory of M/C & Mechanism','Thermal Engg & Gas Dynamics','Fluid Dynamics',/* 5 sem */'Entrepreneurship&Management','Turbo Machinery','Mechanical Measurement & Control','Machine Component & Design','Dynamics of Machines',/* 6 sem */'Operations Management','Powerplant Engg.','Metal Cutting & CNC Machines','IC Engines','Heat&Mass Transfer',/* 7 sem */'Elective-I','Elective-II','Mechanical Vibration & Noise Engg.','Automobil Engg.','O R & Supply chain',/* 8 sem */'Elective-III','Machine Design','Refrigeration & A.C','CAD/CAM/CIM'];

   		var civilsubjects=[/* 1 sem */'M-1','Physics','C.E.D','F.C.S.E','F.E.E',/* 2 sem */'M-2','Chemistry','English','E.G','D.S',/* 3 sem */'M-2','TBT','SOM','Engg. Geology','B.D.D',/* 4 sem */'M-3','Concrete Technology','Surveying','CMT','Fluid Mechanics',/* 5 sem */'Transportation Engg.','Advanced Surveying','Fluid Mech-II','Structural Design & Drawing-I','Theory Of Structures',/* 6 sem */'Theory Of Structures-II','Water Resources & Irrigation Engg.','Environmental Engg-I','Geo Tech Engg.-I','Structural Design & Drawing-II',/* 	 7 sem */'Design of Hydraulic Structure','Advanced Structural Design-II','Environmental Engg.-II','Quantity Surveying & Costing','Elective-I',/* 8 sem */'GeoTechnicl Engg.-II','Construction Planning & Management','Advanced Structural Design-II','Elective-II'];

   		


         var cssem3=[/* M2 5 */'Advanced Engg. Mathematics by Erwin Kreyszig, Wiley India','Higher Engg. Mathematics by BS Grewal, Khanna Publication','Advanced Engg. Mathematics by D.G.Guffy','Mathematics for Engg. by S.Arumungum','Engg. Mathematics by S S Sastri, P.H.I','','',/* M4 7 */'C.L.Liu Elements of discrete Mathematics','Trembley,J.P & Manohar Discrete Mathematical structure with applications','Discrete Mathematics by Kenneth H. Rosen','Lipschultz:Discrete Mathematics(Schaum)','Deo,Narsingh Graph theory with application','Krishnamurthy V: "Combinatorics theory & application"','Discrete Mathematics by SK Sarkar',/* DCS 7 */'M. Mano "Digital logic & Computer Design"','Malvino & Leach: "Digital principles & applications"','W.H Gothman: "Digital Electronics"','Millman & Taub: "Pulse Digital & Switching Waveforms"','Jain RP: Modern Digital Electronics','R.J Tocci: "Digital system principles & applications"','A.Anand Kumar "Fundamentals of Digital Circuits"',/* EDC 6 */'Milliman Halkias-Integrated Electronics','Gayakwad:OP-amp & linear integrated circuits','Salivahanan:EDC','Salivahanan:LIC','Milliman Grabel:Micro Electronics','RobertBoylestad & Nashetsky:EDC theory','',/* DS 7 */'R.Kruse et al:Data Structure & program design in C','ISRD Group:Data Structure using C','Lipschutz:Data Structure(Schaum)','Horowitz & Sahani:"Fundamentals of Data Structures"','M Tenenbaum:Data Structures using C & C++','Trembley & Sorenson:Data Structures','Pai:Data Structure & Algorithm','Introduction to algorithm-Corman'];

   		var cssem4=[/* M3 6 */'JH Mathews & KD Fink: Numerical methods using Matlab','MKJain,Iyengar & RK Jain: Numerical methods for scientific and Engg. Computation','Mathematical Methods by KV Suryanarayan Rao','Numerical Methods using Matlab by Yang','Probability & Statistics by Ravichandran','Mathematical Statistics by George R','',/* CSO 7 */'Morris Mano: Computer System Architecture','Tanenbaum: Structured Computer Organization','JP Hayes: Computer Architecture & Organizations','Gaonkar: Microprocessor Architecture,Programming, Applications with 8085','William Stallings: Computer Organization & Architecture','ISRD group: Computer Organization','Carter: Computer Architecture(Schaum)',/* OOT 6 */'David Parsons: OOP with C++','Robert Lafore: OOP in C++','E Balagurusamy: OOP with C++','Herbert Schieldt: Java Complete Reference','Hubbard: Programming in C++(Schaum)','Mastering C++ by Venugopal','',/* Analysis & Design of Algo 5 */'Introduction to algorithms by CLR','Horowitz & Sahani: Analysis & Design of Algorithm','Dasgupta: Algorithms','Ullmann: Analysis & Design of Algorithm','Michael T Goodrich, Robarto Tamassia, Algorithm Design','','',/* ADC 7 */'Singh & Sapre: Communication System','Taub & Shilling: Communication System','Hsu: Analog & Digital Comm.(Schaum)','BP Lathi: Modern Digital & Analog Comm. System','Simon Haykins: Comm. Systems','Wayne Tomasi: Electronic Comm. System','Martin S. Roden: Analog & Digital Comm. System'];

   		var cssem5=[/* Data Comm. 7 */'Gupta Prakash C: Data Communication','Forouzan: Data Communication & Networking','Godbole A.: Data Communication & Network','Miller: Data Network & Communication','Stallings William: Data & Computer Communication','Tenenbaum A.S.: Computer Network','Kennedy G.: Communication Systems',/* OS 7 */'Silberschatz: Operating System','Stuart: Operating system Principles,Design & Applications','Tannanbaum: Modern Operating System','Dhamdere: Operating System','Achyut S Godbole: Operating System','William Stalling: Operating System','Deital & Deital: Operating Systems',/* DBMS 7 */'Date CJ: An Intro to DBMS','Korth,Silbertz,Sudarshan: Fundamentals of DBMS','Rob: DBMS Design, Implementation & Management','Elmasri, Navathe: Fundamentals Of DBMS','Atul Kahate: Intro to DBMS','Oracle 9i Database Administration Fundamental-I,Volume-I','Paneerselvam: DBMS',/* Computer Graphics &        		Multimedia 6 */'Rogers: Procedural Elements of Computer Graphics','Donald Heam & MP Becker: Computer Graphics','Parekh: Principles of Multimedia','Maurya: Computer Graphics with virtual reality system','Pakhira: Computer Graphics, Multimedia & Animation','Andleigh, Thakral: Multimedia System & Design','',/* TOC 6 */'John E. Hopcroft, Jeffrey Ullmann: Intro to Automata Theory,Languages & Computation','KLP Mishra & N.Chandrasekaran: Theory of Computer Science','Michael Sipsev: Theory of Computation','John C Martin: Intro to Languages and theory of Computation','Daniel IA Cohen: Intro to Computer Theory','Kohavi: Switching to Finite Automata Thoeory',''];
   										/* */
   		
   		var cssem6=[/* Micro-processor&Interfacing 6 */'Douglas V Hall,Microprocessors and interfacing – Programming & Hardware TMH','Gaonkar, Microprocessor Architecture, Programming & Applications with 8085, TMH','Rafiquzzaman, Microprocessors-Theory & Applications, PHI','Savaliya, 8086 Programming & Advance Processor Architecture, Wiley India','Ray, Bhurchandi, Advanced Microprocessor and peripherals TMH Pub','Soumitra Kumar Mandal, Microprocessors and Microcontroller TMH Pub',''/* P.P.L 6 */, 'Sebesta,Concept of programming Language, Pearson Edu.',' Louden, Programming Languages: Principles & Practices , Cengage Learning','Tucker, Programming Languages: Principles and paradigms , Tata McGraw –Hill','Terrance W Pratt, Programming Languages: Design and Implementation Pearson Edu','Cavlo Ghezzi & Mehdi Jazayeri  Programming Languages Concepts, Willey India','E Horowitz, Programming Languages, 2nd Edition, Addison Wesley',''/* Software Engg. & Project Management 7 */, 'Pankaj Jalote ,An Integrated Approach to Software Engineering, Narosa Pub, 2005','Rajib Mall, Fundamentals of Software Engineering Second Edition, PHI Learning','R S. Pressman ,Software Engineering: A Practitioners Approach, Sixth edition','Sommerville,Software Enginerring,Pearson Education','Richard H.Thayer,Software Enginerring & Project Managements,Willey India','Waman S.Jawadekar,Software Enginerring, TMH','Schwalbe,IT Project Managements,Cengage Learning'/* Computer Networking 5 */, 'Andrew S. Tanenbaum, David J. Wetherall, Computer Networks Pearson Education','Dimitri Bertsekas, Robert Gallager, Data Networks, PHI Publication, Second Edition','Kaveh Pahlavan, Prashant Krishnamurthy, Networking Fundamentals','Uyless Black, Computer Networks, PHI Publication, Second Edition','Ying-Dar Lin, Ren-Hung Hwang, Fred Baker, Computer Networks: An Open Source Approach','','',/* A.C.A */ 'Kai Hwang, Advanced computer architecture, TMH','J.P.Hayes, computer Architecture and organization” MGH','V.Rajaranam & C.S.R.Murthy, Parallel computer PHI Learning.','Kain,Advance Computer Architecture: - A System Design Approach”, PHI Learning',' M.J Flynn, Computer Architecture, Pipelined and Parallel Processor Design','Hwang and Briggs, Computer Architecture and Parallel Processing','David E. Callav & Jaswinder Pal Singh Marge Kaufmann Advance Computer Architecture'];
   		
   		var cssem7=[/* Compiler Design 5*/' A. V. Aho, R. Sethi, and J. D. Ullman. Compilers: Principles, Techniques and Tools , Pearson Education','Raghavan, Compiler Design, TMH Pub','Louden. Compiler Construction: Principles and Practice, Cengage Learning','A. C. Holub. Compiler Design in C , Prentice-Hall Inc., 1993','Mak, writing compiler & Interpreters, Willey Pub','','',/* Distributed System 4*/'Sinha, Distributed Operating System Concept & Design, PHI','Coulouris & Dollimore, Distributed System Concepts and Design, Pearson Pub',' Singhal & Shivratari, Advance Concept in Operating System, McGraw Hill','Attiya & Welch, Distributed Computing, Wiley Pub','','','',/* Cloud Computing 5*/'Buyya, Selvi ,” Mastering Cloud Computing “,TMH Pub','Kumar Saurabh, “Cloud Computing” , Wiley Pub','Krutz , Vines, “Cloud Security “ , Wiley Pub','Velte, “Cloud Computing- A Practical Approach” ,TMH Pub','Sosinsky, “ Cloud Computing” , Wiley Pub','','',/* I.S.M 6*/'G. Somasundaram & Alok Shrivastava (EMC Education Services) editors; Information Storage and Management: Storing, Managing, and Protecting Digital Information; Wiley India','Ulf Troppens, Wolfgang Mueller-Friedt, Rainer Erkens, Rainer Wolafka, Nils Haustein; Storage Network explained : Basic and application of fiber channels, SAN, NAS, iSESI, INFINIBAND and FCOE, Wiley India','John W. Rittinghouse and James F. Ransome; Cloud Computing : Implementation Management and Security, CRC Press, Taylor Frances Pub',' Nick Antonopoulos, Lee Gillam; Cloud Computing : Principles, System & Application, Springer',' Anthony T. Velete, Toby J.Velk, and Robert Eltenpeter, Cloud Computing : A practical Approach, TMH Pub.','Saurabh , Cloud Computing : Insight into New Era I','',/* Elective-I */'Network & Web Security: 1) Fourozon, “Cryptography & Network Security” TMH..... 2) William Stallings, “Cryptography and Network Security: Principles and Practice”','Simulation & Modelling: 1) Gorden G., System simulation, Prentice Hall.....2)Harrington, Simulation Modeling methods, McGraw Hill','Embedded Computer System: 1) Shibu, Introduction to Embedded System:, TMH.....2)Barrett ,Embedded Systems :Design and Applications ,Pearson Education','Real Time Fault Tolerant Systems: 1) Krishna, Real Time System, TMH.....2) Siewert, Real Time Embeded System, Cengage Learning','','',''];

   		var cssem8=[/* Soft Computing 7*/'S, Rajasekaran & G.A. Vijayalakshmi Pai, Neural Networks, Fuzzy Logic & Genetic Algorithms, Synthesis & applications, PHI Publication','S.N. Sivanandam & S.N. Deepa, Principles of Soft Computing, Wiley Publications','Rich E and Knight K, Artificial Intelligence, TMH, New Delhi.','Bose, Neural Network fundamental with Graph , Algo.& Appl, TMH','Kosko: Neural Network & Fuzzy System, PHI Publication','Klir & Yuan ,Fuzzy sets & Fuzzy Logic: Theory & Appli.,PHI Pub','Hagen, Neural Network Design, Cengage Learning',/* Web Engg. 7 */' Roger S.Pressman, David Lowe, “Web Engineering”','Achyut S Godbole and Atul Kahate, “Web Technologies”','Gopalan N P , Akilandeswari,  “Web Technology: A Developer s Perspective” , PHI','Neil Gray,  “Web server Programming” Wiley','Chris Bates, “Web Programming: Building Internet applications” Wiley','Moller, An Introduction to XML and Web Technologies','“Web Technologies: Black Book”, Kogent, Dreamtech',/* Elective III */'Network Management: 1) Forouzan, TCP/IP Protocol Suite 4th edition, TMH..... 2)J.Richard Burkey, Network Management Concept and Practice, PHI','Cyber Security : 1) Principles of Cyber crime, Jonathan Clough Cambridge University Press..... 2)Cyber Law Simplified, Vivek Sood, Pub: TMH','Data Mining and Knowledge Discovery : 1) Berson: Data Warehousing & Data Mining &OLAP , TMH.....2) Arun.K.Pujari, Data Mining Techniques, University Press','Semantic Web & Ontologies : 1) Hitzler, Markus, Rudolph , “ Foundations of Semantic Web Technologies”.....2) Antoniou , Harmelen , “A semantic Web Primer”, PHI Pub','','','',/* Elective IV */'Bioinformatics : 1) Gopal & Jones, BIOINFORMATICS with fundamentals of Genomics & Proteomics ,TMH Pub.....2)Rastogi , Bioinformatics –Concepts , skills & Applications , CBS Pub','Digital Image Processing : 1) Rafael C Gonzalez, Richard E Woods 3rd Edition, Digital Image Processing Pearson.....2)Sonka, Digital Image Processing & Computer Vision , Cengage Learning','Wireless Network : 1) Kaveh Pahlavan, Prashant Krishnamurthy “principles of Wireless Networks”, PHI.....2)Sumit Kasera, Nishit Narang, A P Priyanka “2.5 G Mobile Networks: GPRS and EDGE”, TMH','Quantum Computing : 1) Quantum Computing without Magic Devices : Zdzislaw Meglicki; PHI.....2)Quantum Computing and communications: An Engineering Approach','','',''];

   			

   		var civilsem3=[/* M-2 5 */'Advanced Engg. Mathematics by Erwin Kreyszig, Wiley India','Higher Engg. Mathematics by BS Grewal, Khanna Publication','Advanced Engg. Mathematics by D.G.Guffy','Mathematics for Engg. by S.Arumungum','Engg. Mathematics by S S Sastri, P.H.I','','',/* TBT 7*/'Chakraborty and Das; Principles of transportation engineering; PHI','Rangwala SC; Railway Engineering; Charotar Publication House, Anand ',' Rangwala SC; Bridge Engineering; Charotar Publication House, Anand','Ponnuswamy; Bridge Engineering; TMH','Railway Engineering by Arora & Saxena - Dhanpat Rai & Sons','Railway Track by K.F. Antia','Principles and Practice of Bridge Engineering S.P. Bindra - Dhanpat Rai & Sons',/* SOM 7*/'Nash; Strength of Materials (Schaum), TMH','Rattan SS; strength of Materials; TMH','Negi; Strength of materials; TMH',' Sadhu Singh; Strength of Materials','Ramamrutham; Strength of Materials','Subramaniam; Strength of Materials; R; Oxford','National Building Code of India, Part-IV',/* Engg. Geology 4 */'Prabin Singh – “Engineering and General Geology','Gulati ; Geotechnical Engineering; TMH','P.K. Mukerjee – “ A text Book of Geology','S.K. Garg – “ A text Book of Physical and Engineering Geology','','','',/* B.D.D 3 */'Malik & Meo; Building Design and Drawing','Shah, Kale & Patki; Building Design and Drawing; TMH','Gurucharan Singh & Jgdish Singh Building Planning, Design and Scheduling','','','',''];

   		var civilsem4=[/* M-3 6 */'JH Mathews & KD Fink: Numerical methods using Matlab','MKJain,Iyengar & RK Jain: Numerical methods for scientific and Engg. Computation','Mathematical Methods by KV Suryanarayan Rao','Numerical Methods using Matlab by Yang','Probability & Statistics by Ravichandran','Mathematical Statistics by George R','',/* Concrete Technology */' Varshney RS; Concrete Technology; Oxfored & IBH','Gambhir ML; Concrete Technology – TMH','Sinha SN; Reinforced Concrete Technology; TMH','New Building Materials Published by B.M.T.P.C','Hand books on Materials & Technology - Published by BMTPC & HUDCO','Mohan Rai & M.P. Jai Singh; Advances in Building Materials & Construction','Jackson N; Civil Engineering materials.',/* Surveying */'T.P. Kanetkar, Surveying & Levelling, Vol. I & II','Duggal; Surveying vol I and II; TMH','Basak; Surveying and Leveling; TMH','R.E.Devis, Surveying theory & Practice, Mc.Graw Hill, New York','David Clark & J Clendinning, Plane & Geodetic surveying Vol. I & II, constable & Co. London.','S.K. Roy, Fundamentals of surveying, prentice - Hall of India','B.C. Punmia, Surveying Vol. I, II, III, Laxmi Publications',/* CMT */'Mohan Rai & M.P. Jai Singh; Advance in Building Materials & Construction','S.C. Rangwala; Engineering Materials','Sushil Kumar; Building Construction','B.C. Punmia; Building Construction','Building Construction, Metchell','Construction Technology, Chudley R','Civil Engineering Materials, N. Jackson',/* Fluid Mechanics */'Modi & Seth; Fluid Mechanics','Som and Biswas; Fluid Mechnics and machinery','Cengal; Fluid Mechanics','White ; Fluid Mechanics','Essential of Engg Hyd. By JNIK DAKE; Afrikan Network & Sc Instt. (ANSTI)','Text Book of fluid Mech. for Engg. Student by Franiss JRD','R Mohanty; Fluid Mechanics'];

   		var civilsem5=[/* Transportation Engg. 7 */'Highway Engineering by Gurucharan Singh','Principles of Pavement Design by E.J. Yoder & M.W. Witzech','Highway Engineering by O’Fleherty','Highway Engineering by S.K. Khanna & C.E.G. Justo','Airport Planning & Design by S.K. Khanna & M. G. arora','Foresch, Charles “Airport Planning”','Horonjeff Robert “The Planning & Design of Airports”',/* Advanced Surveying 6 */'Surveying and Leveling-Part-I & II by T.P. Kanetkar and S.V. Kulkarini','Engineering Surveying : Theory and Examination Problems for Students by W. Schofield','Surveying: Problems Solving with theory and objective type questions by A.M. Chandra','Advance Surveying by A.M. Chandra','Surveying Vol. II by S.K. Duggal','Remote Sensing and image interpretation by Lillesand T.M. and Kiefer R.W','',/* Fluid Mech-II 7 */'Fluid Mechanics - Modi & Seth','Open Channel Flow by Rangaraju','Fluid Mechanics - A.K. Jain - Khanna Publishers','Fluid Mechanics, Hydraulics & Hydraulic Machanics - K.R. Arora','Hyd. of open channels By Bakhmetiff B.A.','Open Channel Hyd. By Chow V.T.','Engineering Hydraulics By H. Rouse',/* Structural Design & Drawing-I 7 */'Plain & Reinforced Concrete Vol. I & II – O.P. Jain & Jay Krishna','Limit State Design by P.C.Varghese ; Prentice Hall of India','Design of Reinforced Concrete Elements by Purushothman','Reinforced Cement Concrete by Gupta & Mallick','Reinforced Cement Concrete by P. Dayaratnam','Plain & reinforced concrete - Rammuttham','Plain & reinforced concrete – B.C. Punnia',/* Theory Of Structures 5 */'Ghali A & Neville M., Structural Analysis - A Unified classical and matrix Approach','Wang C.K. Intermediate structural analysis, McGraw Hill','Kinney Streling J. Indeterminate structural Analysis, Addison Wesley','Reddy C.S., Basic Structural Analysis, Tata McGraw Hill Publishing Company','Norris C.H., Wilbur J.B. and Utkys. Elementry Structural Analysis, McGraw Hill International','',''];

   		var civilsem6=[/* Theory Of Structures-II */'Wang C.K. Intermediate structural analysis','Kinney Streling J. Indeterminate structural Analysis','Reddy C.S., Basic Stgructural Analysis, Tata McGraw Hill','Norris C.H., Wilbur J.B. and Utkys. Elementary Structural Analysis','Weaver W & Gere JM, Matrix Methods of Framed Structures','','',/* Water Resources & Irrigation Engg. */'Irrigation & Water Power Engg. by Punmia & Pandey B.B.Lal','Engg. Hydrology by K. Subhramanya - Tata Mc Graw Hills','Engg. Hydrology - J.NEMEC - Prentice Hall','Hydrology for Engineers Linsley, Kohler, Paulnus','Hydrology & Flood Control by Santosh Kumar - Khanna Publishers','Engg. Hydrology by H.M. Raghunath','',/* Environmental Engg-I */'Water Supply Engineering by B.C. Punmia','Water Supply & Sanitary Engg. by G.S. Birdi','Water & Waste Water Technology by Mark J.Hammer','Environmental Engineering - H.S. Peavy & D.R.Rowe','Water Supply & Sanitary Engg. by S.K. Husain','Water & Waste Water Technology - G.M. Fair & J.C. Geyer','Relevant IS Codes',/* Geo Tech Engg.-I */'Soil Mech. & Found. Engg. by Dr. K.R. Arora','Soil Mech. & Found. by Dr. B.C.Punmia','Modern Geotech Engg. by Dr.l Aram Singh','Geotech Engg. by C. Venkatramaiah','Soil Mech. & Found. Engg. by S.K. Garg','Soil Testing for Engg. by T.W. Lambe','Relevant I.S. Codes',/* Structural Design & Drawing-II */' Design of steel structures by Arya & Azmani Nemchand & Bros','Design of steel structures by P.Dayaratnam','Design of steel structures Vol. I & II by Ramchandra','Design of steel structures by L.S. Negi','Design of steel structures by Ramammutham','Design of steel structures by Punmia',''];

   		var civilsem7=[/* Design of Hydraulic Structure */'Engineering for Dams (Volumes I, II & III) by Creager, Justin & Hinds','Hydroelectric Hand Book by Creager','Hydraulic Structures by Varshney','Irrigation & Water Power Engg. by Punmia & Pandey B.B.Lal','Water Power Engineering by Dandekar','','',/* Advanced Structural Design-II */'R.C.C. by O.P. Jain Vol. II','R.C.C. by B.C. Punmia','Essentials of Bridge engineering – D.J. Victor','Bridge Engineering - Ponnuswamy','Advanced R.C.C. Design by N.K. RAJU','N.Krishna Raju, Prestressed Concrete','Pre stresses concrete – T.Y. Lin',/* Environmental Engg.-II */'Water Supply & Sanitary Engg. - G.S. Birdie','Waste Water Engg. by B.C. Punmia','Environmental Engg. - M.L. Davis & D.A. Cornwell','Chemistry for Environmental Engg. - Sawyer & Mc Carty','Water & Waste Water Technology - Mark J Hammer','Waste Water Engineering - Metcalf & Eddy','',/* Quantity Surveying & Costing */'Quantity Surveying & Costing – B.N. Datta','Estimating & Costing for Civil Engg. – G.S. Birdi','Quantity surveying & costing – Chakraborty','Estimating & Costing – S.C. Rangawala','','','',/* Elective-I */'Computational Methods in  Structural Engineering : 1) Ghali A & Neville M., Structural Analysis - A Unified Classical and Matrix  Approach.....2)Cook R.D., Concepts and Applications of Finite Element Analysis, Wiley, New York','Traffic Engineering : 1) Traffic Engineering and Transport Planning by L.R. Kadiyali, Khanna Publishers, Delhi.....2)Traffic Engineering by Matson, W.S.Smith & F.W. Hurd','Industrial Waste Treatment : 1) Waste Water Treatment - Arceivala - Tata Mc Graw Will.....2)Industrial Pollution Control, hand book - Lund H.F. Tata Mc Graw Will','','','',''];

   		var civilsem8=[/* GeoTechnicl Engg.-II 6 */'Soil Mechanics & Foundation Engg. by Dr. K.R. Arora','Soil Mechanics & Foundation Engg. by B.C. Punmia','Modern Geotech. Engg. by Dr. Alam Singh','Geotech. Engg. by C.Venkatramaiah','Found. Engg. by GALeonards McGraw Hill','Relevant IS Code','',/* Construction Planning & Management */'Construction Equipment by Peurify','CPM by L.S. Srinath','Construction Management by S. Seetharaman','CPM & PERT by Weist & Levy','Construction, Management & Accounts by Harpal Singh','Tendering & Contracts by T.A. Talpasai','',/* Advanced Structural Design-II */'Design of Steel Structures – Ramammutham','Design of Steel Structures – Punia','Steel Str. by Ramchandra Vol II','Steel Str. by Arya & Ajmani','Design of steel structures – L.S. Negi','','',/*  Elective-II */'Structural Dynamics & Earthquake Engineering : 1) Berg G.V. Elements of Structural Dynamics, Prentice Hall of India, Englewood Cliffs.....2)Paz Mario, Structural Dynamics, CBS Publishers','Pavement Design : 1) Principles of pavement design by E.J.Yoder & M.W. Witczak.....2)Srinivasan M. "Modern Permanent Way"','Air Quality Monitoring & Control: 1) "Air Pollution" - Faith W.L, John Wiley & Sons.....2)"Air Pollution" - Mc Cabe L.C., Mc. Graw Hill, International','DESIGN OF PRESTRESSED CONCRETE STRUCTURES : 1) Lin T.Y., Design of Prestressed Concrete Structures.....2)Varatnam P., Prestressed Concrete Structures','Advance Water Resources Engg : 1) Subramany K., Engg. Hydrology .....2)Philiphs & Ravindran: Operations Research','',''];

   		var itsem3=[/**/'Object oriented programming in C++ by Robert Lafore','J. Rumbaugh, Object-Oriented Modeling and Design using UML','Balagurusamy; Object oriented programming with C++','Rajesh K Shukla, Object Oriented Programming by C++','Kahate A; Object oriented analysis and design','Ken Barclay, Object oriented design with C++','Kamthane,”Object Oriented Programming using Turbo C++”'];

   		var itsem4=[/**/'Elmasri, Navathe, “Fundamentals Of Database Systems”','Korth, Silbertz, Sudarshan, “Database Concepts”','Toledo; Data base management systems;TMH','Panneeselvam “Database Management System” PHI','Date C J, “An Introduction To Database System”, Addision Wesley','Majumdar ; DBMS; TMH','Oracle 9i Database Administration fundamental – I, volume 1'];
   					
   		var itsem5=[/* Data Comm. */'Data communication and networking”, Forouzan, TMH 4 th edition','Data communication and Computer Networks, Prakash  C Gupta ,PHI Learning','“Computer Networks” - Tanenbaum ,PHI Learning','Communication Networks-Fundamental concepts and key Architectures”, Leon-Garcia,Widjaja, TMH','Computer Communications &  Networking Technologies”-Michael A. Gallo','Network for computer scientists & engineers” –Youlu zheng & shakil akhtar','', /* I.S.M */'IT strategy and Management by Sanjiva Shankar Dubey, PHI','Marketing of Information Technology,by K.Venkatesh,TMH','','','','','',/* Computer Networks */'“Local area networks  ”, Forouzan, TMH, 1st edition','“Computer Networks” - Tanenbaum ,PHI Learning','“Computer Networks” ,N Olifer and V Olifer ,Wiley publication','“Computer Communications &  Networking Technologies”-Michael A. Gallo','','','',/* System Programming & O.S. */'M. Flynn “ Operating Systems”. Cengage Learning','Silberschatz ,”Operating system”, Willey Pub','Tanenbaum “ Modern Operating System” PHI Learning','Dhamdhere, ”System Programming and Operating System”,TMH','Stuart,”Operating System Principles, Design & Applications”,Cengage Learning','Operating System : Principle and Design by Pabitra Pal Choudhury, PHI Learning','',/* Java Programming*/'Naughton & Schildt  “The Complete Reference Java 2”, Tata McGraw Hill','Deitel  “Java- How to Program:” Pearson Education, Asia','Horstmann & Cornell  “Core Java 2” (Vol I & II ) ,  Sun Microsystems','lvan  Bayross  “Java 2.0” : BPB publications','Java Programming for the absolute beginners By Russell, PHI Learning','Ivor Horton’s “Beginning Java 2, JDK 5 Ed., Wiley India',''];

   		var itsem6=[/* Unix & Shell Programming */'','','','','','','',/* Computer Graphics & Multimedia */'Donald Hearn and M.Pauline Baker, “Computer Graphics C Version”','Prabat K Andleigh and Kiran Thakrar, “Multimedia Systems and Design','Tay Vaughan, “Multimedia making it work”, Tata McGraw Hill edition','Amarendra N Sinha & Arun D Udai , “Computer Graphics”, McGraw Hill publication','','','',/* Internet Technology & Network Management */'“TCP/IP-Protocol suite”, Forouzan, TMH 3 edition ','“Computer Networks and Internets”, D.E.Comer, Pearson','“Network management- principles & practice” Mani Subramaniam','“TCP/IP Illustrated” Volume I ,W. Richard Stevens, Addison Wesley Internetworking with TCP/IP Vol. I, II & III, Comer, PHI Learning','','','',/* Web Technology */'Web Technologies- A computer science perspective By Jeffrey C. Jackson, Pearson Eduction','Web Technologies-TCP/IP Architecture, and Java Programming By Achyut S. Godbole','An introduction to Web Design+Programming by Paul S. Wang Sanda, S Katila','Web Technology- A developer’s Perspective by N.P.Gopalan, J.Akilandeswari','','','',/* Software Engg. & Project Management */'Software Engineering. A Practitioners Approach by P,S. Pressman','Software project Management from concept to development Black Book by Kieron Conway','Software Engineering principle and practices- Deepak Jain','Software Engineering for students 4/e - Bell Douglas Pearson Education','Software Project Management, Kelkar, PHI Learning','',''];

   		var itsem7=[/* Object Oriented Analysis */'Satzinger, Jackson and Burd, “Object oriented Analysis and design with the Unified Process”','Michael Blaha and J. Rumbugh, “Object oriented Modeling and design with UML”','O’Docherty, “Object Oriented Analysis and Design Understanding, System Development with UML2.0”, Wiley India','','','','',/* Wireless&Mobile Computing */'J. Schiller, “Mobile Communication”, Addision , Wiley','William Stalling, “Wireless Communication and Network”, Pearson Education','Upen Dalal,” Wireless Communication”, Oxford Higher Education','Dr. Kamilo Feher, “Wireless Digital communication”, PHI','William C.Y Lee, “Mobile Communication Design Fundamental” , John Wiley','','',/* Cloud Computing */'Buyya, Selvi ,” Mastering Cloud Computing “,TMH Pub','Kumar Saurabh, “Cloud Computing” , Wiley Pub','Krutz , Vines, “Cloud Security “ , Wiley Pub','Velte, “Cloud Computing- A Practical Approach” ,TMH Pub','Sosinsky, “ Cloud Computing” , Wiley Pub','','',/* Elective-I */'Advanced Concepts In Database Systems : 1) Majumdar & Bhattacharya, “Database Management System”, TMH.....2)Elmasri, Navathe, “Fundamentals of Database Systems”, Addison Wesley','Simulation and Modeling : 1) Gorden G., “System simulation”, Printice Hall.....2)Averill M Law “ Simulation Modeling and Analysis”, TMH','Human-Computer Interaction : 1) Alan Dix, Janet E. Finlay, “Human-Computer interaction”, Pearson Education.....2) Olsen, “Human-Computer Interaction”, Cengage Learning','Automata and Compiler Design : 1) Louden, “Compiler construction”, Cengage learning.....2) Alfred V Aho, Jeffrey D. Ullman, “Principles of Compiler Design”, Narosa','','','',/* Elective-II */'Embedded System : 1) Shibu K V, “Introduction to Embedded System”, TMH.....2)David E Simon, “An Embedded Software Primer”, Pearson education Asia, 2001','E-Commerce and Governance : 1) Gary P. Schneider, “E-commerce”, Cengage Learning India.....2)C.S.R. Prabhu, “E-governence: concept and case study”, PHI Learning Private Limited','High Performance Computing : 1) David j. Kuck, “High Performance Computing”, Oxford Univ Pr, 1996.....2) Gary W. Sabot, “High Performance Computing ”, Addison-Wesley, 1995','Bioinformatics : 1) Harshawardhan P.bal, “Bioinformatics Principle and Applications”, TMH.....2)Lesk, A.M.2002, “Introduction to Bioinformatics”, Oxford University Press','Unix & Shell Programming : 1) M.J. Bach “Design of UNIX O.S. “, PHI Learning.....2)Y.Kanetkar “Unix shell programming”, BPB Pub','',''];

   		var itsem8=[/* Information Security */'Bernard Menezes, “ Network Security and Cryptography”, CENGAGE Learning','Charlie Kaufman, “ Network Security”, PHI','Forouzan, “Cryptography & Network Security”, TMH','Randy Weaver, “ Network Infrastructure Security”, Cengage Learning','Atual Kahate, “ Cryptography and Network Security”, TMH','William Stalling, “ Cryptography and Network security”, Pearson','',/* Soft Computing */'S.N. Shivnandam, “Principle of soft computing”, Wiley','S. Rajshekaran and G.A.V. Pai, “Neural Network , Fuzzy logic And Genetic Algorithm”, PHI','Jack M. Zurada, “Introduction to Artificial Neural Network System” JAico Publication','Simon Haykins, “Neural Network- A Comprehensive Foudation”','Timothy J.Ross, “Fuzzy logic with Engineering Applications”, McGraw-Hills 1','','',/* Elective-III */'Component Based Software Engineering : 1) Component Software ,Clemens Szyperski, Addison-Wesley Professional.....2)G Sudha Sadasioam, “Computer-based Technology”','Real Time Systems : 1) C.M Krishna and Kang G. Shin, Real Time Systems, TMH.....2)Jane W.S Liu, Real time systems, Mc-Graw Hill','Image processing : 1) R.C Gonzalez & Richard E Wood, “Digital Image Processing”.....2)B Chanda, D. Dutta Majumder, “Digital image Processing and Analysis”','Artificial Intelligence : 1) Rich E and Knight K, “Artificial Intelligence”, TMH.....2)Nelsson N.J., “Principles of Artificial Intelligence”, Springer Verlag','','','',/* Elective-IV */'Data Mining & Warehousing : 1) P.Ponnian, “Data Warehousing Fundamentals”, John Weliey.....2)Han,Kamber, “Data Mining Concepts & Techniques”, M.Kaufman','Cyber law & Forensic : 1) Nelson, Phillips, “Computer Forensics and Investigations”, Cengage.....2)NIIT, Understanding Forensics in IT, PHI Learning','Adhoc Network : 1) C.K. Toh, “Ad Hoc Mobile Wireless Networks: Protocols and Systems”.....2)George Aggelou, “Mobile Wireless Networks”, Tata McGraw- Hill','Operation Research : 1) J.K.Sharma, “Operation Research”, MacMilan.....2)Taha, “Introduction to O.R”, PHI','','',''];


   		var ecsem3=[/* M2 5 */ 'Advanced Engineering Mathematics by Erwin Kreyszig, Wiley India','Higher Engineering Mathematics by BS Grewal, Khanna Publication','Advance Engineering Mathematics by D.G.Guffy','Mathematics for Engineers by S.Arumungam, SCITECH Publuication','Engineering Mathematics by S S Sastri. P.H.I.','','',/*  Computer System Organization 4 */'Morris Mano: Computer System Architecture, PHI','William Stallings: Computer Organization and Architecture, PHI','Carl Hamacher: Computer Organization, TMH','Tanenbaum: Structured Computer Organization, Pearson Education','','','',/* Electronic Instrumentation 3 */'H. S. Kalsi: Electronics Instrumentation, TMH','K. Sawhney: Instrumentation and Measurements, Dhanpat Rai and Co','Helfric and Cooper: Modern Electronic Instrumentation and Measurement Techniques; Pearson','','','','',/* New (Electronic Devices) 5 */'Boylestad and Nashelsky: Electronic Devices and Circuit Theory, Pearson Education','Millman and Halkias: Integrated electronics, TMH','Graham Bell: Electronic Devices and Circuits, PHI','Sendra and Smith: Microelectronics, Oxford Press','Donald A Neamen: Electronic Circuits Analysis and Design, TMH','','',/* Network Analysis 7 */'M.E. Van Valkenburg: Network Analysis, PHI','Mesereau and Jackson: Circuit Analysis- A system Approach, Pearson','Hayt W.H. & J.E. Kemmerly: Engineering Circuit Analysis, TMH','Decarlo lin: Linear circuit Analysis, Oxford','William D Stanley : Network Analysis with Applications, Pearson Education','Roy Choudhary D: Network and systems, New Age Pub','Chakraborti: Circuit Theory, Dhanpat Rai'];


         var ecsem4=[/* M3 6 */'Numerical Methods using Matlab by J.H.Mathews and K.D.Fink, P.H.I.','Numerical Methods for Scientific and Engg. Computation by MKJain, Iyengar and RK Jain, New Age International Publication','Mathematical Methods by KV Suryanarayan Rao, SCITECH Publuication','Numerical Methods using Matlab by Yang,Wiley India','Pobability and Statistics by Ravichandran ,Wiley India','Mathematical Statistics by George R., Springer','',/* Electromagnetic Theory 7 */'Mathew N.O Sadiku: Elements of Electromagnetic, Oxford University Press','William H. Hayt: Engineering Electromagnetic, TMH','John D. Kraus: Electromagnetics, Mc. Graw Hill','Jordan Balmian: Electromagnetic wave and Radiating System, PHI','David K. Cheng: Electromagnetic Fields and Wave, Addison Wesley','Ramo, Whinnerry and VanDuzzer “ Fields and waves in communication electronics “, Wiley 1984','Harrington RF, “Electromagnetic fields” Mc Graw Hill',/* Digital Electronics 6 */'M. Mano : Digital Logic and Computer Design, Pearson Education','W.H. Gothman : Digital Electronics, PHI','Millman and Taub : Pulse, Digital and Switching Waveforms, MGH','Salivahanan and Ari Vahagan : Digital Circuits and Design, Vikas Publishing House','Leach and Malvino : Digital Principles and Applications, TMH','Rajkamal : Digital Systems – Priciples and Design, Pearson Education','',/* New (Linear Integrated Circuits and its Applications) 5 */'Ramakanth A. Gayakwad, “Op-Amps & Linear ICS”, PHI, 4th edition, 1987','R.F. Coughlin & Fredrick Driscoll, “Operational Amplifiers & Linear Integrated Circuits” , 6th Edition, PHI','David A. Bell, “Operational Amplifiers & Linear ICs”, Oxford University Press, 2nd edition, 2010','Sergio Franco, “Design with Operational Amplifiers & Analog Integrated Circuits” Mcgraw Hill, 1988','C.G. Clayton , “Operational Amplifiers “ , Butterworth & Company Publ. Ltd./Elsevier, 1971','','',/* Analog Communication 7 */'B.P. Lathi : Modern Analog and Digital Communication System, Wiley Eastern limited','Taub and Schilling : Principles of communication Systems, TMH','Singh and Sapre : Communication Systems, TMH','S Haykin : Communication Systems, John Wiley and Sons Inc','S Ghose: Signals and Systems, Pearson Education','A Bruce Carlson : Communication System, TMH','Steven : Communication Systems – Analysis and Design, Pearson Education'];


         var ecsem5=[/* Voice Communication 7 */'W. Tomasi: Advanced Electronic Communication Systems, 6th Edition, PHI',' W. Tomasi: Electronic Communication Systems, Pearson Education','John C.Bellamy: Digital Telephony, 3rd Edition, Willey India Pvt. Limited','T. Vishwanathan: Telecommunication Switching Systems and Networks, PHI','James Martin: Telecommunication and Computers, PHI',' G. F. Snyder: Introduction to Telecommunication Networks, Vikas Publishing House','Cole Marion: Introduction to Telecommunication, Pearson Education',/* Electromagnetic Theory 7 */'Mathew N.O Sadiku: Elements of Electromagnetic, Oxford','N.N. Rao: Element of Engineering Electromagnetic, Pearson Education','William H. Hayt: Engineering Electromagnetic, TMH','John D. Kraus: Electromagnetics, Mc. Graw Hill','Jordan Balmian: Electromagnetic wave and Radiating System, PHI','David K. Cheng: Electromagnetic Fields and Wave, Addison Wesley','Ramo, Whinnerry and VanDuzzer  Fields and waves in communication electronics , Wiley 1984',/* Digital Communication 7 */'Taub and Schilling: Principles of Communication System, TMH','Simon Haykins: Communication Systems, 4th Edition, John Wiley','Singh and Sapre: Communication System, TMH','B.P. Lathi: Modern Analog and Digital Communication System, Oxford University Press','Tomasi: Advanced Electronics Communication Systems, 6th Edition, PHI','Couch: Digital and Analog Communication, Pearson Education','David Smith : Digital Transmission Systems, Springer- Macmillan India Ltd',/* Microprocessor, Microcontroller and Embedded Systems 7 */'B. B. Brey: The Intel Microprocessors, Architecture, Programming and Interfacing, Pearson Education','Liu Gibson: Microcomputer Systems: The 8086/8088 Family- Architecture, Programming and Design , PHI','D. V. Hall: Microprocessors and Interfacing, TMH','Mazidi and Mazidi: The 8051 Microcontroller and Embedded Systems, Pearson Education','Ayala Kenneth:- The 8051 microcontroller, Third Edition, Cengage Learning','A. V. Deshmukh: Microcontroller (Theory and Application), TMH','Raj Kamal: Embedded Systems- Architecture, Programming and Design, TMH, New Delhi',/* Electronics and Telecommunication 7 */'Neil H.E. Weste, David Harris, Ayan Banerjee: CMOS VLSI Design, Third Edition, Pearson Education','Neil H.E. Weste, Kamran Eshraghian: Principle of CMOS VLSI Design, Pearson Education','J. P. Uyemura: Chip Design for Submicron VLSI, Cengage Learning','Philip E. Allen and Douglas R Holberg: CMOS Analog Circuit Design, Oxford','Carver Mead and Lynn Conway: Introduction to VLSI systems, BS Publication','J. P. Uyemura: Introduction to VLSI Circuits and Systems, Wiley','Plummer: Silicon VLSI Technology, Pearson Education'];


         var ecsem6=[/* Data Communication and Networks 7 */'B. A. Forouzan and Sophia Chung Fegan: Data Communications and Networking, 4th Ed, TMH.','W. Tomasi: Introduction to Data Communications and Networking, Pearson Education','A. S. Tanenbaum: Computer Networks, Pearson Education','W. Stalling: Data and Computer Communication, Pearson Education','P. C. Gupta: Data Communications and Computer Networks, PHI','A. Elahi and M. Elahi: Data Network and Internet-Communications Technology, Cengage Learning','Duck: Data Communication and Networking, Pearson Education',/*  Cellular Mobile Communication 5 */'Lee: Cellular and Mobile Communication, 2nd edition, McGraw Hill','D. P. Agrawal and Q. An Zeng: Wireless and Mobile Systems, Cengage Learning, 2006','Faher Kamilo: Wireless Digital Communication, Prentice Hall of India, New Delhi, 2006','G. J. Mullet: Introduction to Wireless Telecommunication Systems and Networks, Cengage Learning','Raj Kamal: Mobile Computing, Oxford University Press','','',/*  Digital Signal Processing 7 */'A.V. Oppenheim and R. W. Schafer: Digital Signal Processing, Prentice Hall','Ingle VK and Proakis John G : Digital Signal Processing A MATLab based Approach, Cengage Learning','L.R. Rabiner and B. Gold: Theory and Application of Digital Signal Processing, Prentice Hall','John. G. Proakis and Monolakis: Digital Signal Processing, Pearson Education','Johnny R. Johnson: Introduction to Digital Signal Processing, PHI, New Delhi','Salivahanan and Vallavraj: Digital Signal Processing, Mc Graw Hill','S. K. Mitra: Digital Signal Processing- A Computer based Approach, Mc Graw Hill',/*  Microwave Engineering 4 */'Y. S. Liao: Microwave Devices, PHI','R. E. Collins: Foundations of Microwave Engineering, 2nd Edition, Wiley Publications','J.H. Reich: Microwave Principles, East West Press','D. M. Pozar: Microwave Engineering, 3rd Edition, Wiley Publications','','','',/*  Communication Network and Transmission Lines 5 */'J.D. Ryder: Networks and Transmission Lines, 2nd edition, PHI','M.E. Valkenberg: Introduction to Modern Network synthesis, Wiley Eastern Ltd','G.K. Mithal: Network Analysis, Khanna Publishers','Umesh Sinha: Networks and Transmission Lines, Satya Prakashan','Suresh: Electric Circuits and Networks, Pearson Education','',''];


         var ecsem7=[/* Elective-I */'Wireless Communication : 1) Molisch: Wireless Communications, Wiley India.....2)Taub and Schilling: Principles of Communication Systems, TMH','Digital Image Processing : 1) Gonzalez and Woods: Digital Image Processing, Pearson Education.....2)Anil Jain: Fundamentals of Digital Image Processing, PHI Learning','Neural Networks : 1) Haykin: Neural Networks- A Comprehensive Foundation, PHI Learning.....2)Satish Kumar: Neural Networks, TMH','','','','',/* Satellite Comm. */'Roddy: Satellite Communications, TMH','Timothy Prattt: Satellite Communications, Wiley India','Agarwal: Satellite Communications, Khanna Publishers','Gangliardi: Satellite Communications, CBS Publishers','Chartrand: Satellite Communication, Cengage Learning','Raja Rao: Fundamentals of Satellite communications, PHI Learning','Monojit Mitra: Satellite Communication: PHI Learning',/* Optical Communication 7 */'G. Keiser: Optical Fiber Communications, 4th Edition, TMH New Delhi','J. M. Senior: Optical Fiber Communication- Principles and Practices, 2nd Edition, Pearson Education','G. P. Agarwal: Fiber Optic Communication Systems, 3rd Edition, Wiley India Pvt. Ltd','J. C. Palais: Fiber Optics Communications,5th Edition, Pearson Education','R.P. Khare: Fiber Optics and Optoelectronics, Oxford University Press','A. Ghatak and K. Thyagrajan: Fiber Optics and Lasers, Macmillan India Ltd','S. C. Gupta: Optoelectronic Devices and Systems, PHI Learning',/* Microwave Engg. */'Liao: Microwave Devices and Circuits, Pearson Education','Das: Microwave Engineering, TMH','Rao: Microwave Engineering, PHI Learning','Collins: Foundations of Microwave Engineering, Wiley India','Srivastava and Gupta: Microwave Devices and Circuits, PHI Learning','Reich: Microwave Principles, East West Press','Pozar: Microwave Engineering, Wiley India',/* VLSI Design */'Geiger, Allen and Strader: VLSI Design Techniques for Analog and Digital Circuits, TMH','Sorab Gandhi: VLSI Fabrication Principles, Wiley India','Weste and Eshraghian: Principles of CMOS VLSI design, Addison-Wesley','Weste, Harris and Banerjee: CMOS VLSI Design, Pearson-Education','Pucknell and Eshraghian: Basic VLSI Design, PHI Learning','Sze: VLSI Technology, TMH','',/* Antenna and Wave Propagation 7 */'J. D. Krauss: Antennas;for all applications, TMH','R. E. Collin, Antennas and Wave Propagation, Wiley India Pvt. Ltd','C. A. Balanis: Antenna Theory Analysis and Design, Wiley India Pvt. Ltd','Jordan and Balmain: Electromagnetic Fields and Radiating System, PHI','A. R. Harish and M. Sachidananda: Antennas and wave propagation, Oxford University Press','K. D. Prasad: Antennas and Wave Propagation, Satya Prakashan','B. L. Smith: Mordern Anteenas, 2nd Edition, Springer, Macmillan India Ltd',/* TV and Radar Engineering 7 */'M. Dhake: Television and Video Engineering, 2nd Edition,TMH, New Delhi','M. I. Skolnik: Introduction to Radar Systems, TMH, New Delhi','R. G. Gupta: Television Engineering and Video Systems, TMH, New Delhi','R. R. Gulati: Monochrome and Colour Television, New Age International','Grob and Herndon: Basic Television and Video Systems, McGraw Hill International','P. Z. Peebles, Jr.: Radar Principles, Wiley India Pvt. LTD','Edde: Radar- Principles, Technology Applications, Pearson Education',/* EC-7101 Wireless Communications 5 */,'A. F. Molisch: Wireless Communications, Wiley India Pvt. Ltd','Taub and Schilling: Principles of Communication Systems, TMH','Upena Dalal: Wireless Communication, Oxford University Press','T. G. Palanivelu and R. Nakkereeran : Wireless and Mobile Communication, PHI Learning','P. M. Chidambara Nathan: Wireless Communication, PHI Learning','','',/*  EC-7102 Digital Image Processing 6 */'R. C. Gonzalez and R. E. Woods: Digital Image Processing, 3rd Edition, Pearson Education','A. K. Jain: Fundamentals of Digital Image Processing, PHI Learning','S. Annadurai and R. Shanmugalakshmi: Fundamentals of Digital Image Processing, Pearson Education','M. Sonka, V. Hlavac and R. Boyle: Digital Image Processing and Computer Vision: Cengage Learning','B. Chanda and D. D. Majumder: Digital Image Processing and Analysis, PHI Learning','S. Jayaraman, S. Esakkirajan and T. Veerakumar: Digital Image Processing, TMH','',/*  EC-7103 Industrial Electronics 6 */'Mohan, Undeland and Robbins: Power Electronics, Wiley-India Edition','M. H. Rashid: Power Electronics- Circuits, Devices and Applications, Pearson Education','P. S. Bimbhra: Power Electronics, Khanna Publisher','Alok Jain: Power Electronics and Its Application, Penram International','Biswanath Paul: Industrial Electronics, PHI Learning','T. E. Kissell : Industrial Electronics, PHI Learning','',/* EC-7201 Satellite Communication 7*/'D. Roddy: Satellite Communications, 4th Edition, TMH, New Delhi','T. Pratt, C. Bostian and J. Allnut: Satellite Communications, 2nd Edition, Wiley India Pvt. Ltd','W. L. Pritchard, H. G. Suyderhoud and R. A. Nelson: Satellite Communication Systems Engineering, 2nd Edition, Pearson Education','D.C. Agarwal: Satellite Communications, Khanna Publishers','R. M. Gangliardi: Satellite Communications, CBS Publishers','M. R. Chartrand: Satellite Communication, Cengage Learning','Raja Rao: Fundamentals of Satellite communications, PHI Learning',/*  EC-7202 Neural Networks 6*/'S. Haykin: Neural Networks- A Comprehensive Foundation, PHI Learning','S. N. Sivanandam, S. Sumathi and S. N. Deepa: Introduction to Neural Networks using Matlab 6.0, TMH, New Delhi','J. A Freeman and D. M. Skapura: Fundamentals of Neural Networks- algorithms, applications and programming techniques, Pearson Education','M. T. Hagan, H. B. Demuth and M. Beale: Neural Network Design, Cengage Learning','J.A Anderson: An introduction ro Neural Networks, PHI Learning','Satish Kumar: Neural Networks, TMH, New Delhi','',/* EC-7203 Random Signal Theory 3*/'G. R. Cooper and C. D. Mcgillem: Probabilistic Methods of Signal and System Analysis, Third Edition,Oxford University Press','M. Lefebvre: Applied Probability and Statistics, Springer, Macmillan India Limited','A. Papoulis, S. U. Pillai: Probability, Random Variable and Stochastic Processes, TMH','','','',''];


         var ecsem8=[/* Elective-II */'Advanced Data Network : 1) Pahlavan and Krishnamurthy: Principles of Wireless Networks.....2)Stallings: Wireless Communications and Networks, Pearson Education','Microwave Circuits : 1) Collin: Foundations for Microwave Engineering, Wiley India.....2)Rizzi: Microwave Engineering- Passive Circuits, PHI Learning','Principles of Management and Managerial Economics : 1) Peter Drucker, Harper and Row: The Practice of Management.....2)Koontz: Essentials of Management, PHI Learning','(Introduction to Microcontrollers for Embedded systems : 1) Ajit Pal, “Microcontrollers Principles and applications”, PHI.....2)B. Kanta Rao, “Embedded Systems”, PHI','','','',/* Advanced Communication Systems 5 */'A. F. Molisch: Wireless Communications, Wiley India Pvt. Ltd','W. C. Y. Lee: Mobile Communications Engineering- theory and practices, TMH','Upena Dalal: Wireless Communications, Oxford University Press','Kamilo Feher: Wireless Digital Communications, PHI Learning','Mullet: Introduction to Wireless Telecommunication Systems and Networks: Cengage Learning','','',/* Computer Networks */'Tanenbaum: Computer Networks, Pearson Education','Bertsekas and Gallager: Data Networks, PHI Learning','Black: Computer Networks, PHI Learning','Forouzan: Computer Networks, TMH','Stallings: Computer Networking and Internet Protocol, Pearson Education','Keiser: Local Area Network, TMH','Forouzan: Data Communication and Networking, TMH',/* TV & Radar Engg. */'Dhake: Television and Video Engineering, TMH','Skolnik: Introduction to Radar Systems, TMH','Gupta: Television Engineering and Video Systems, TMH','Gulati: Monochrome and Colour Television, New Age Internationa','Grob and Herndon: Basic Television and Video Systems, McGraw Hill International','Peebles, Jr.: Radar Principles, Wiley India Pvt. LTD','Edde: Radar- Principles, Technology Applications, Pearson Education',/* CMOS Circuit Design 5 */'B. Razavi: Design of Analog CMOS Integrated Circuits, TMH Publication','Weste, Harris and Banerjee: CMOS VLSI Design, Pearson Education','J. M. Rabaey, Digital Integrated Circuits, PHI Learning','R. Jacob Baker: CMOS-Circuit Design, Layout and Simulation, Wiley','A. A. Raj and T. Latha: VLSI Design, PHI Learning','','',/* Nanoelectronics 7 */'G. W. Hanson: Fundamentals of Nanoelectronics, Pearson Education','K. K. Chattopadhyay and A. N. Banerjee: Introduction to Nanoscience and Nanotechnology, PHI Learning','Vlaadiniz U. Mitin: Introduction to Nanoelectronics, Cambridge University Press','M. Dragman and D. Dragman: Nanoelectronics- Principles and devices, Artech House','Karl Goser: Nanoelectronics and Nanosystems, Springer','Daniel Minoli: Nanotechnology application to telecommunication and networking, Wiley Interscience','John H. Davis: Physics of low dimension semiconductor, Cambridge Press',/* EC-8101 Advanced Data Networks 4 */'K. Pahlavan and P. Krishnamurthy: Principles of Wireless Networks, PHI Learning','G. Keiser: Optical Fiber Communications, 4th Edition, TMH New Delhi','T. Pratt, C. Bostian and J. Allnut: Satellite Communications, 2nd Edition, Wiley Indian Pvt. Ltd','Upena Dalal: Wireless Communications, Oxford University Press','','','',/* EC-8102 Microwave Circuits 3*/'R. E. Collin: Foundations for Microwave Engineering, 2nd Edition, Wiley India Pvt. Ltd','D. M. Pozar: Microwave Engineering, 3rd Edition, Wiley India Pvt. Ltd','P. A. Rizzi: Microwave Engineering- Passive Circuits','','','','',/* EC-8103 Principles of Management & Managerial Economics 7 */'Peter Drucker, Harper and Row: The Practice of Management','Koontz: Essentials of Management, PHI Learning','Staner: Management, PHI Learning','Daft: Principles of Management, Cengage Learning','T. N. Chhabra: Principle and Practice of Management, Dhanpat Rai, New Delhi','Hirschey: Managerial Economics, Cengage Learning','T. R. Banga and S.C. Sharma: Industrial Organisation and Engineering Economics, Khanna Publishers'];

	      var mesem3=[/* M2 5 */'Advanced Engineering Mathematics by Erwin Kreyszig, Wiley India','Higher Engineering Mathematics by BS Grewal, Khanna Publication','Advance Engineering Mathematics by D.G.Guffy','Mathematics for Engineers by S.Arumungam, SCITECH Publuication','Engineering Mathematics by S S Sastri. P.H.I','','',/* PRODUCTION PROCESS 7 */'Anderson and Tetro; Shop Theory;TMH','Kaushik JP; Manufacturing Processes; PHI','Bawa; Manufacturing Processes; TMH','. Rao PN; Manufacturing Tech- Foundry, forming welding; TMH','. Rao PN; Manufacturing Tech- Metal cutting and machine tools; TMH',' Chapman; Workshop Technology','. Begeman; Manufacturing Process : John Wiley',/* STRENGTH AND MECHANICS OF MATERIALS 7 */'Beer FP, Johnson ER, Dewolf JT : Mechanics of Materials; TMH','Rattan; Strength of materials; TMH','Nash William; Schaum’s Outline Series; Strength of Materials; TMH',' Negi ; strength of materials; TMH','Singh Arbind K; Mechanics of Solids; PHI','Sadhu Singh; Strength of Materials; Khanna Pub','Kamal K and Ghai RC; Advanced Mechanics of Materials; Khanna Pub',/* THERMODYNAMICS 7 */'P.K.Nag; Engineering Thermodynamics; TMH',' Van GJ; Thermodynamics; John Wylen',' Cengel Y; Thermodynamics; TMH','Arora CP; Thermodynamics; TMH','Thermal Engineering by R Yadav',' Engineering Thermodynamics by Omkar Singh New Age International',' Engineering Thermodynamics by Ratha Krishanan PHI India Pvt. Ltd',/* MDD 7 */' Bhat, ND; Machine Drawing; Charotar','Singh A; Machine Drawing; TMH',' Narayana and Reddy; Machine Drawing; New age, Delhi',' Agarwal and agrawal; Engineering Drawing; TMH','Shigley JE et al; Mechanical Engineering Design, TMH',' John KC; Text Book Of Machine Drawing; PHI Learning',' Kulkarni SG; Machine Design; TMH',/* JAVA 5 */' Deitel & Deitel, ”JAVA, How to Program”; PHI, Pearson.',' E. Balaguruswamy, “Programming In Java”; TMH Publications','The Complete Reference: Herbert Schildt, TMH','Peter Norton, “Peter Norton Guide To Java Programming”, Techmedia.',' Merlin Hughes, et al; Java Network Programming , Manning Publications/Prentice Hall'];

         var mesem4=[/* M3 6 */'Numerical Methods using Matlab by J.H.Mathews and K.D.Fink, P.H.I.','Numerical Methods for Scientific and Engg. Computation by MKJain, Iyengar and RK Jain, New Age International Publication','Mathematical Methods by KV Suryanarayan Rao, SCITECH Publuication','Numerical Methods using Matlab by Yang,Wiley India','Pobability and Statistics by Ravichandran ,Wiley India','Mathematical Statistics by George R., Springer','',/* MATERIAL SCIENCE AND METALLURGY 7 */'. Narula GK, KS and GuptaVK; Material science; TMH',' Raghavan V; Material Science and Engineering, PHI Publication',' Raghavan V; Physical Metallurgy Principles and Practice; PHI',' Rajendran V and Marikani; Material science; TMH',' Sriniwasan R; Engineering materials and Metallurgy; TMH',' Navneet Gupta, Material Science & Engineering, Dhanpat Rai','. B. K. Agrawal, Introduction to Engineering Materials, TMH',/* TOM 7 */'Rattan SS; Theory of machines; TMH',' Ambekar AG; Mechanism and Machine Theory; PHI','Sharma CS; Purohit K; Theory of Mechanism and Machines; PHI','Thomas Bevan; Theory of Machines; Pearson/ CBS PUB Delhi',' Rao JS and Dukkipati; Mechanism and Machine Theory; NewAge Delhi',' Dr.Jagdish Lal; Theory of Machines; Metropolitan Book Co; Delhi',' Ghosh,A,.Mallik,AK; Theory of Mechanisms & Machines, 2e,; Affiliated East West Press,Delhi',/* THERMAL ENG & GAS DYNAMIC 7 */' Nag PK; Power plant Engineering; TMH',' Thermodynamics by Gordon J. Van Wylen',' P.K.Nag; Basic and applied Thermodynamics; TMH',' Ganesan; Gas turbines; TMH',' Heat Engines by V.P. Vasandani & D. S. Kumar',' R. Yadav Steam and Gas Turbines',' R.Yadav Thermal Engg.',/* FLUID MECHANICS 7 */'Modi & Seth; Fluid Mechanics; Standard Book House, Delhi',' Streeter VL, Wylie EB, Bedford KW; Fluid Mechanics; TMH',' Som and Biswas; Fluid Mechnics and machinery; TMH',' Cengal; Fluid Mechanics; TMH',' White ; Fluid Mechanics ; TMH',' Gupta; Fluid Mechanics; Pearson',' JNIK DAKE; Essential of Engg Hyd; Afrikan Network & Sc Instt. (ANSTI)',/* DOT NET 7 */' C# for Programmers by Harvey Deitel, Paul Deitel, Pearson Education',' Balagurusamy; Programming in C#; TMH','Web Commerce Technology Handbook by Daniel Minoli, Emma Minoli , TMH','. Web Programming by Chris Bates, Wiley','. XML Bible by Elliotte Rusty Harold',' ASP .Net Complete Reference by McDonald, TMH',' ADO .Net Complete Reference by Odey, TMH'];

         var mesem5=[/* EPC 7 */'- Daft R; The new era of management; Cengage','Bhat Anil, Arya kumar; Management: Principles ,Processes and Practices; Oxford higher edu','Davis & Olson; Management Information System; TMH','Steven Alter; Information systems, Pearson, www.stevenalter.com','Kotler P; Marketing management','Khan, Jain; Financial Management;','ILO; Work study; ILO',/* TURBO MACHINERY 7 */'Venkanna BK; turbomachinery; PHI','Shepherd DG; Turbo machinery        ','Csanady; Turbo machines','Kadambi V Manohar Prasad; An introduction to EC Vol. III-Turbo machinery; Wiley Eastern Delhi','Bansal R. K; Fluid Mechanics & Fluid Machines','Rogers Cohen & Sarvan Multo Gas Turbine Theory','. Kearton W. J; Steam Turbine: Theory & Practice',/* MECHANICAL MEASUREMENT & CONTROL 6 */'Nakra and Chowdhry; Measurement and Control; TMH','Figiola RS & Beasley DE; Theory and Design for Mechanical Measurements; 3e John Wiley','Katsuhiko Ogata; Modern Control Engineering, 4e Pearson Education, New Delhi','. Gopal; Control Systems Principles and Design; Tata McGraw Hill, New Delhi','Backwith and Buck; Mechanical Measurements.','Swahney; Metrology and Instrumentation;','',/* MACHINE COMPONENT & DESIGN 7 */'Shingley J.E; Machine Design; TMH','Sharma and Purohit; Design of Machine elements; PHI','. Wentzell Timothy H; Machine Design; Cengage learning','Mubeen; Machine Design; Khanna Publisher','Ganesh Babu K and Srithar k; Design of Machine Elements; TMH','Sharma & Agrawal; Machine Design; Kataria & sons','Maleev; Machnine Design',/* DOM 7 */'Ambekar, AG; Mechanism and Machine Theory; PHI','. Rattan SS; Theory of machines; TMH','Sharma and Purohit; Design of Machine elements; PHI','Bevan; Theory of Machines;','Ghosh and Mallik; Theory of Mechanisms and Machines; Affiliated East-West Press, Delhi','Norton RL; kinematics and dynamics of machinery; TMH','Grover; Mechanical Vibrations',/* DOM 3 */'es: A Silberschatz, H.F. Korth, Sudersan “Database System Concept”=, MGH Publication','C.J. Date “An introduction to Database System”=6th ed','Elmasri & Navathe “Foundamentals of Database system”- III ed.','','','',''];

         var mesem6=[/* OPERATIONS MANAGEMENT 6 */'Chary SN; Production and Operations Management; TMH','Hopp W and Spearman M; Factory Physics; TMH','Gitlow Howard et al; Quality Management; TMH','Khanna RB; Production and Operations Management; PHI','Vollman, berry et al; Manufacturing planning and control for SCM; TMH.','Chase Richard B et al; Operations management; SIE-TMH','',/* POWER PLANT ENGG 6 */'Nag PK; Power plant Engg; TMH','Al-Wakil MM; Power plant Technology; TMH','- Sharma PC; Power plant Engg; Kataria and sons, Delhi','Domkundwar; Power Plant Engg; Dhanpatrai & sons','- Rajput RK; A text book of Power plant Engg.; Laxmi Publications','Yadav R; Steam and gas turbine and power plant engg by','',/* METAL CUTTING AND CNC MACHINES 5 */'Boston; Metal Processing','. Hazra Chadhary; Workshop Tech.II','Lindberg – Materials & Processes of Manufacture','Work shop technology by Raghuvanshi-Vol-II','. Production Processes by HMT','','',/* ICG 5 */'A. Course in IC engines by M.L. Mathur & R.P. Sharma','Internal Combusion engines by V. Ganeshan','Internal Combusion Engines Theory & Practice by G.F. Taylor','Introduction to IC Engines by Richard Stone','Internal Combustion Engines by DomKundwar Dhanpat rai Publications','','',/* HEAT & MASS TRANSFER 7 */'Sukhatme SP; Heat and mass transfer; University Press Hyderabad','Holman JP; Heat transfer; TMH','Dutta Binay K; Heat Transfer; PHI','Kumar DS; Heat and mass transfer; SK Kataria and Sons Delhi','Kreith; Heat transfer','Sachdeva RC; Fundamentals of engineering heat and mass transfer','Gupta & Prakash; Engineering heat transfer',/* CAE 7 */'Gokhle Nitin; et al; Practical Finite Element Analysis; Finite to Infinite, 686 Budhwar Peth, Pune','Krishnamoorthy; Finite Element Analysis, theory and programming; TMH','Buchanan; Finite Element Analysis; Schaum series; TMH','Seshu P; Textbook of Finite Element Analysis; PHI','Desai Chandrakant S et al; Introduction to finite element Method','Zienkiewicz; The finite element Method; TMH','Reddy an introduction to finite element method; TMH'];

         var mesem7=[/* Elective-I */'Design of Heat Exchangers : 1) Kern D Q, Kraus A D; Extended Surface Heat Transfer; TMH.....2)Kays, Compact Heat Exchangers and London, TMH','Computer Aided engineering and FEM : 1) Gokhle Nitin; et al; Practical Finite Element Analysis; Finite to Infinite.....2)Logan DL ; A First Course in Finite element Method; Cegage','Industrial Robotics : 1) Mittal RK, Nagrath IJ; Robotics and Control; TMH.....2)Groover M.P,Weiss M, Nagel,OdreyNG; Industrial Robotics','Work Study and Ergonomics : 1) ILO; work-study; International Labour Organization.....2)Khan MI; Industrial Ergonomics; PHI Learning','','','',/* Elective-II */'Renewable Energy System : 1) Khan, B H, Non Conventional Energy, TMH......2)Nikolai, Khartchenko; Green Power; Tech Book International','Project Management : 1) Prasana Chandra: Projects: planning Implementation control; TMH.....2)Gray Clifford F And Larson EW; Project The managerial Process','Total Quality Management and SQC : 1) Gitlow HS, Oppenheim et al; Quality Management; TMH.....2)Gryna FM; Jurans Quality Planning and Analysis; TMH','MIS ERP and e Business : 1) Davis and Olson, Management Information Systems, TMH.....2)James O Brian, Management Information Systems, TMH','','','',/* MECHANICAL VIBRATION & NOISE ENGG 7 */'Ambekar A.G., Mechanical Vibrations and Noise Engineering; PHI',' Meirovitch Leonard; Element of Vibration Analysis; TMH ','Dukikipati RV Srinivas J Text book of Mechanical Vibrations; PHI',' Kelly SG and kudari SK; Mechanical Vibrations; Schaum Series;TMH','Thomson , W.T., Theory of Vibration with Applications , C.B.S Pub & distributors',' Singiresu Rao, Mechanical Vibrations,Pearson Education','G.K. Grover,  Mechanical Vibration , Nem chand and Bross , Roorkee',/* AUTOMOBILE ENGG 7 */'Crouse , Automotive Mechanics TMH','Srinivasan S; Automotive engines; TMH',' Gupta HN; Internal Combustion Engines; PHI;','Joseph Heitner, Automotive Mechanics, Principles and Practices, CBS Pub','Kripal Singh, Automotive Engineering Khanna Pub','Newton & Steeds , Automotive Engineering','Emission standards from BIS and Euro I and Euro-III',/* Operations Research and Supply Chain */'Hillier FS and Liberman GJ; Introduction to Operations Research concept and cases','Simchi-Levi, Keminsky; Designing and managing the supply chain; TMH','Srinivasan G; Quantitative Models In Operations and SCM; PHI Learning','Mohanty RP and Deshmukh SG; Supply Chain Management','Taha H; Operations research; PHI','Sen RP; Operations Research-Algorithms and Applications','Sharma JK; Operations Research; Macmillan',/*     OVER       *//* DESIGN OF HEAT EXCHANGER 4 */' Kern D Q, Kraus A D; Extended Surface Heat Transfer; TMH','Kays, Compact Heat Exchangers and London, TMH','Kokac, Heat Exchangers- Thermal Hydraulic fundamentals and design;TMH','Tubular Exchanger Manufacturer Association (TEMA), and other codes','','','',/* CAE & FEM 7 */' Gokhle Nitin; et al; Practical Finite Element Analysis; Finite to Infinite, 686 Budhwar Peth, Pune','Logan DL ; A First Course in Finite element Method; Cegage ','Krishnamoorthy; Finite Element Analysis, theory and programming; TMH','Buchanan; Finite Element Analysis; Schaum series; TMH','Seshu P; Textbook of Finite Element Analysis; PHI.','Chennakesava RA; Finite Element Methods-Basic Concepts and App; PHI Learning',' Reddy JN; An introduction to finite element method; TMH',/* INDUSTRIAL ROBOTICS 7 */'Mittal RK, Nagrath IJ; Robotics and Control; TMH','Groover M.P,Weiss M, Nagel,OdreyNG; Industrial Robotics-The Appl; TMH','Groover M.P; CAM and Automation; PHI Learning','Spong Mark and Vidyasagar; Robot Modelling and control; Wiley India','Yoshikava ; Foundations of Robotics- analysis and Control; PHI Learning;','Murphy ; Introduction to AI Robotics; PHI Learning','FU KS, Gonzalez RC, Lee CSG; Robotics Control, sensing; TMH',/* WORK STUDY & ERGONOMICS 7 */'ILO; work-study; International Labour Organization',' Khan MI; Industrial Ergonomics; PHI Learning','Barrnes RM; Motion and Time Study; Wiley pub',' Megaw ED; Contenmprory ergonomics; Taylor & fracis','Sandera M and Mc Cormick E; Human Factors in Engg and design; MGHill','Currie RM; Work study; BIM publications',' Mynard; Hand book of Industrial Engg;',/* RENEWABLE ENERGY & SYSTEM 7 */'Kothari, Singal & Rajan; Renewable Energy Sources and Emerging Technologies, PHI Learn','Khan, B H, Non Conventional Energy, TMH.','Sukhatme and Nayak, Solar Energy, Principles of Thermal Collection and Storage, TMH','Tiwari and Ghosal, Renewable Energy Resources: basic principle & application, Narosa Publ','Koteswara Rao, Energy Resources, Conventional & Non-Conventional, BSP Publication',' Chetan Singh Solanki, Solar Photovoltaics: Fundamental, technologies and Application, PHI L','Abbasi Tanseem and Abbasi SA; Renewable Energy Sources; PHI Learning',/* PROJECT MANAGEMENT 7 */'Prasana Chandra: Projects: planning Implementation control; TMH.','Gray Clifford F And Larson EW; Project The managerial Process; TMH','Panneerselven and Serthil kumar; Project management, PHI','Burke ; Project Management-Planning and control technics; Wiley India','Kamaraju R; Essentials of Project Management; PHI Learning','Jack R. Meredith, Project Management: a managerial approach, Wiley','Choudhary ;Project Management; TMH',/* TQM & SQC 7 */'Gitlow HS, Oppenheim et al; Quality Management; TMH','Gryna FM; Jurans Quality Planning and Analysis; TMH','Crosby Philips; Quality is still free; New Amer Library','Kulkarni VA and Bewoor AK; Quality Control; Wiley','Jankiraman B and Gopal RK; Total Quality Management- Text and Cases; PHI Learning','Sugandhi L and Samual A; Total Quality Management; PHI Learning','Subburaj R; Total Qality Management; TMH',/* MIS ERP & E-BUSINESS 7 */'Davis and Olson, Management Information Systems, TMH','James O Brian, Management Information Systems, TMH','Oz, Management Information Systems, Cengage','Alter Stevenson, Information Systems: Foundation of E-Business; (Prentice-Hall,USA)','Jayaraman, Business Process Re-Engineering, TMH',' Garg. V.K.; ERP, PHI','Kelkar SA; Management Information Systems A Concise Study; PHI Learning',/* OR & SC 7 */' Hillier FS and Liberman GJ; Introduction to Operations Research concept and cases; TMH','Simchi-Levi, Keminsky; Designing and managing the supply chain; TMH',' Srinivasan G; Quantitative Models In Operations and SCM; PHI Learning','Mohanty RP and Deshmukh SG; Supply Chain Management; Wiley India ','Taha H; Operations research; PHI',' Sen RP; Operations Research-Algorithms and Applications; PHI Learning','Sharma JK; Operations Research; Macmillan'];


         var mesem8=[/* Elective ?? */'Energy Management & Audit. : 1) Murphy & Mckay, Energy Management, BSP Books Pvt. Ltd.....2)mith CB; Energy Management Principle, Pergamon Press, New York','Tools Design and Machine Tools : 1) Mehta N.K.; Machine Tool Design and Numerical Control; TMH.....2)Sen G.C, Bhattacharya A; Principles of Machine Tools','Reliability & Maintenance : 1) Ebeling CE; An Introduction To Reliability & Maintainability Engg; TMH.....2)Srinath L.S; Reliability Engineering; East West Press','Simulation & Process Modeling. : 1) Law AM and Kelton WD; Simulation Modeling and Analysis.....2)Gordon G., System simulation, PHI Learning','','','',/* Machine Design */'Shigley J.E.; Machine Design; TMH','BhandariVB; Design of Machine Elments; TMH','Sharma CS and Purohit K; Design of Machine Elements; PHI Learning','Hall and Somani; Machine Design; Schaum Series; TMH','Wentzell TH; Machine Design; Cegage Learning','Sharma & Agrawal; Machine Design; Katson','Kulkarni SG; Machine Design; TMH',/* REFRIGERATION & AIR CONDITIONING 7 */'Arora CP; Refrigeration and Air Conditioning; TMH','Sapali SN; Refrigeration and Air Conditioning; PHI','Ananthanarayan; Basic Refrigeration and Air conditioning; TMH','Manohar Prasad; Refrigeration and Air Conditioning; New Age Pub','Ameen; Refrigeration and Air Conditioning; PHI','Pita ; Air conditioning Principles and systems: an energy approach; PHI','Stoecker W.F, Jones J; Refrigeration and Air conditioning; McGH, Singapore',/* CAD 6 */'S.Kant Vajpay; Principles of CIM; PHI','Rao PN; CAD/CAM;TMH','Groover MP; Automation, Production Systems & CIM; P.H.I.','Rao PN, Tiwari NK, Kundra TK; Computer Aided Manufacturing; TMH','Alavudeen A, Venkteshwarn N; Computer Integrated Mfg; PHI','Radhakrishnan P, Subramanian S and Raju V; CAD/CAM/CIM; New age Pub','',/* ENERGY CONSEVATION AND AUDIT 7 */'Murphy & Mckay, Energy Management, BSP Books Pvt. Ltd.','Smith CB; Energy Management Principle, Pergamon Press, New York.',' Rajan GG, Optimising Energy Efficiency in Industry, TMH.',' Callaghan P O, Energy Management, McGraw-Hill Book Company.',' Amit Kumar Tyagi, Handbook on Energy Audit and Management, Tata Energy Research Institute',' Bureau of Energy Efficiency, Study material for energy Managers and Auditors: Paper I to V.',' Hamies; Energy Auditing and Conservation: Method, Measurement, Hemisphere, Washington.',/* TOOL ENGG & MACHINE TOOLS 7 */' Mehta N.K.; Machine Tool Design and Numerical Control; TMH',' Sen G.C, Bhattacharya A; Principles of Machine Tools; New Central Book Agency','Donaldson; Tool Design T.M.H','Jain KC and Chitale AK; Text Book Of Production Engineering; PHI Learning','Juneja, Sekhon and Seth; Fundamentals of Metal Cutting and Machine Tools; New Age',' Krar SF, Gill AR, Smid P; Technology of Machine Tools;TMH ','Sharma P.C; Production Engineering; Chand S',/* RELIABILITY & MAINTENENCE 7 */'Ebeling CE; An Introduction To Reliability & Maintainability Engg; TMH',' Srinath L.S; Reliability Engineering; East West Press','Naikan; Reliability engg and life testing; PHI','Kapur KC and Lamberson LR; Reliability in Engineering Design; Wiley India ','Telang AD and Telang A; Comprehensive Maintanance Management; PHI ','Mishra R.C; Reliability and Maintenance Engineering; New age International publisher','Balaguruswamy; Reliability Engg; TMH',/* SIMULATION & PROCESS MODELING 7 */'Law AM and Kelton WD; Simulation Modeling and Analysis; TMH ','Gordon G., System simulation, PHI Learningl','Banks J; Hand book of Simulation; John Wiley','Taha H, Operations Research; PHI','Hillier FS, Liberman GJ; Introduction to OR; TMH','Deo N; System Simulation with Digital Computer; PHI Learning','Harrell C, Ghosh B, Bowden R; Simulation Using Promodel; MG Hill',/* MD 7 */'Shigley J.E.; Machine Design; TMH','BhandariVB; Design of Machine Elments; TMH','Sharma CS and Purohit K; Design of Machine Elements; PHI Learning','Hall and Somani; Machine Design; Schaum Series; TMH','Wentzell TH; Machine Design; Cegage Learning','Sharma & Agrawal; Machine Design; Katson','Kulkarni SG; Machine Design; TMH',];

   		function ref()
   			{	if(localStorage.branch==5)
   				{
	   				if(localStorage.semester==3)
	   				{  
	   					document.getElementById("refer1").innerHTML=civilsem3[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=civilsem3[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=civilsem3[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=civilsem3[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=civilsem3[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=civilsem3[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=civilsem3[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==4)
	   				{  
	   					document.getElementById("refer1").innerHTML=civilsem4[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=civilsem4[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=civilsem4[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=civilsem4[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=civilsem4[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=civilsem4[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=civilsem4[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==5)
	   				{  
	   					document.getElementById("refer1").innerHTML=civilsem5[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=civilsem5[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=civilsem5[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=civilsem5[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=civilsem5[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=civilsem5[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=civilsem5[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==6)
	   				{  
	   					document.getElementById("refer1").innerHTML=civilsem6[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=civilsem6[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=civilsem6[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=civilsem6[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=civilsem6[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=civilsem6[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=civilsem6[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==7)
	   				{  
	   					document.getElementById("refer1").innerHTML=civilsem7[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=civilsem7[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=civilsem7[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=civilsem7[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=civilsem7[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=civilsem7[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=civilsem7[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==8)
	   				{  
	   					document.getElementById("refer1").innerHTML=civilsem8[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=civilsem8[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=civilsem8[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=civilsem8[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=civilsem8[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=civilsem8[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=civilsem8[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
   				}

   				else if(localStorage.branch==3)
   				{
	   				if(localStorage.semester==3)
	   				{  
	   					document.getElementById("refer1").innerHTML=ecsem3[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=ecsem3[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=ecsem3[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=ecsem3[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=ecsem3[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=ecsem3[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=ecsem3[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==4)
	   				{  
	   					document.getElementById("refer1").innerHTML=ecsem4[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=ecsem4[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=ecsem4[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=ecsem4[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=ecsem4[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=ecsem4[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=ecsem4[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==5)
	   				{  
	   					document.getElementById("refer1").innerHTML=ecsem5[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=ecsem5[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=ecsem5[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=ecsem5[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=ecsem5[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=ecsem5[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=ecsem5[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==6)
	   				{  
	   					document.getElementById("refer1").innerHTML=ecsem6[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=ecsem6[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=ecsem6[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=ecsem6[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=ecsem6[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=ecsem6[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=ecsem6[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==7)
	   				{  
	   					document.getElementById("refer1").innerHTML=ecsem7[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=ecsem7[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=ecsem7[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=ecsem7[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=ecsem7[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=ecsem7[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=ecsem7[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==8)
	   				{  
	   					document.getElementById("refer1").innerHTML=ecsem8[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=ecsem8[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=ecsem8[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=ecsem8[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=ecsem8[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=ecsem8[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=ecsem8[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
   				}

   				else if(localStorage.branch==4)
   				{
	   				if(localStorage.semester==3)
	   				{  
	   					document.getElementById("refer1").innerHTML=mesem3[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=mesem3[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=mesem3[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=mesem3[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=mesem3[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=mesem3[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=mesem3[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==4)
	   				{  
	   					document.getElementById("refer1").innerHTML=mesem4[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=mesem4[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=mesem4[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=mesem4[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=mesem4[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=mesem4[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=mesem4[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==5)
	   				{  
	   					document.getElementById("refer1").innerHTML=mesem5[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=mesem5[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=mesem5[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=mesem5[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=mesem5[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=mesem5[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=mesem5[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==6)
	   				{  
	   					document.getElementById("refer1").innerHTML=mesem6[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=mesem6[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=mesem6[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=mesem6[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=mesem6[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=mesem6[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=mesem6[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==7)
	   				{  
	   					document.getElementById("refer1").innerHTML=mesem7[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=mesem7[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=mesem7[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=mesem7[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=mesem7[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=mesem7[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=mesem7[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   				else if(localStorage.semester==8)
	   				{  
	   					document.getElementById("refer1").innerHTML=mesem8[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=mesem8[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=mesem8[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=mesem8[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=mesem8[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=mesem8[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=mesem8[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
   				}

   				else if(localStorage.branch==2 && (localStorage.subject==12 || localStorage.subject==17))
	   			{
	   				if(localStorage.subject==12)
	   				{
	   					document.getElementById("refer1").innerHTML=itsem3[0];
	   					document.getElementById("refer2").innerHTML=itsem3[1];
	   					
	   					
	   					document.getElementById("refer3").innerHTML=itsem3[2];
	   			

	   					document.getElementById("refer4").innerHTML=itsem3[3];
	   					document.getElementById("refer5").innerHTML=itsem3[4];
	   					document.getElementById("refer6").innerHTML=itsem3[5];
	   					document.getElementById("refer7").innerHTML=itsem3[6];
	   				}
	   				else if(localStorage.subject==17)
	   				{
	   					document.getElementById("refer1").innerHTML=itsem4[0];
	   					document.getElementById("refer2").innerHTML=itsem4[1];
	   					
	   					
	   					document.getElementById("refer3").innerHTML=itsem4[2];
	   			

	   					document.getElementById("refer4").innerHTML=itsem4[3];
	   					document.getElementById("refer5").innerHTML=itsem4[4];
	   					document.getElementById("refer6").innerHTML=itsem4[5];
	   					document.getElementById("refer7").innerHTML=itsem4[6];
	   				}
	   				
	   			}

   				else if((localStorage.branch==1 || localStorage.branch==2))
   				{
	   				if(localStorage.semester==3)
	   				{  
	   					document.getElementById("refer1").innerHTML=cssem3[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=cssem3[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					
	   					
	   					document.getElementById("refer3").innerHTML=cssem3[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   			

	   					document.getElementById("refer4").innerHTML=cssem3[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=cssem3[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=cssem3[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=cssem3[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}

	   				else if(localStorage.semester==4)
	   				{  
	   					document.getElementById("refer1").innerHTML=cssem4[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=cssem4[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					
	   					
	   					document.getElementById("refer3").innerHTML=cssem4[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					
	   					document.getElementById("refer4").innerHTML=cssem4[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					
	   					document.getElementById("refer5").innerHTML=cssem4[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					
	   					document.getElementById("refer6").innerHTML=cssem4[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=cssem4[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}

	   				else if(localStorage.semester==5 && localStorage.branch==2)
	   				{  
	   					document.getElementById("refer1").innerHTML=itsem5[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=itsem5[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=itsem5[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=itsem5[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=itsem5[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=itsem5[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=itsem5[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}

	   				else if(localStorage.semester==5 && localStorage.branch==1)
	   				{  
	   					document.getElementById("refer1").innerHTML=cssem5[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=cssem5[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=cssem5[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=cssem5[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=cssem5[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=cssem5[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=cssem5[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}

	   				else if(localStorage.semester==6 && localStorage.branch==2)
	   				{  
	   					document.getElementById("refer1").innerHTML=itsem6[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=itsem6[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=itsem6[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=itsem6[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=itsem6[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=itsem6[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=itsem6[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}

	   				else if(localStorage.semester==6 && localStorage.branch==1)
	   				{  
	   					document.getElementById("refer1").innerHTML=cssem6[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=cssem6[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=cssem6[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=cssem6[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=cssem6[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=cssem6[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=cssem6[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}

	   				else if(localStorage.semester==7 && localStorage.branch==2)
	   				{  
	   					document.getElementById("refer1").innerHTML=itsem7[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=itsem7[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=itsem7[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=itsem7[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=itsem7[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=itsem7[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=itsem7[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   			

	   				else if(localStorage.semester==7 && localStorage.branch==1)
	   				{  
	   					document.getElementById("refer1").innerHTML=cssem7[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=cssem7[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=cssem7[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=cssem7[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=cssem7[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=cssem7[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=cssem7[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}

	   				else if(localStorage.semester==8 && localStorage.branch==2)
	   				{  
	   					document.getElementById("refer1").innerHTML=itsem8[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=itsem8[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=itsem8[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=itsem8[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=itsem8[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=itsem8[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=itsem8[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}

	   				else if(localStorage.semester==8 && localStorage.branch==1)
	   				{  
	   					document.getElementById("refer1").innerHTML=cssem8[7*(localStorage.subject-5*(localStorage.semester-1))];
	   					document.getElementById("refer2").innerHTML=cssem8[7*(localStorage.subject-5*(localStorage.semester-1))+1];
	   					document.getElementById("refer3").innerHTML=cssem8[7*(localStorage.subject-5*(localStorage.semester-1))+2];
	   					document.getElementById("refer4").innerHTML=cssem8[7*(localStorage.subject-5*(localStorage.semester-1))+3];
	   					document.getElementById("refer5").innerHTML=cssem8[7*(localStorage.subject-5*(localStorage.semester-1))+4];
	   					document.getElementById("refer6").innerHTML=cssem8[7*(localStorage.subject-5*(localStorage.semester-1))+5];
	   					document.getElementById("refer7").innerHTML=cssem8[7*(localStorage.subject-5*(localStorage.semester-1))+6];
	   				}
	   			}
	   				
	   			


	   					/* DEFAULT CONDITION */

	   			else
	   			{
	   					document.getElementById("refer1").innerHTML="nothing stored right now";
	   					document.getElementById("refer2").innerHTML="nothing stored right now";
	   					document.getElementById("refer3").innerHTML="nothing stored right now";
	   					document.getElementById("refer4").innerHTML="nothing stored right now";
	   					document.getElementById("refer5").innerHTML="nothing stored right now";
	   					document.getElementById("refer6").innerHTML="nothing stored right now";
	   					document.getElementById("refer7").innerHTML="nothing stored right now";
	   			
				}
			}
   		function display()
   			{
   				document.getElementById("subject").innerHTML="Displaying subjects of "+branches[parseInt(localStorage.branch)-1]+" branch "+" Semester "+parseInt(localStorage.semester);
   			}
   		function display2()
   			{
   				document.getElementById("write").innerHTML=branches[parseInt(localStorage.branch)-1]+" branch "+" semester "+parseInt(localStorage.semester);
   			}
   		function abc(br)
   			{
   				getbranch(br);
   				/*display();*/
   				display2();
   				sem();
   			}
   		function sem()
   			{	var i;
   				i=5*(localStorage.semester-1);
   				if(localStorage.branch==1)
	   				{	document.getElementById("1").innerHTML=cssubjects[i];
	   					document.getElementById("2").innerHTML=cssubjects[i+1];
	   					document.getElementById("3").innerHTML=cssubjects[i+2];
	   					document.getElementById("4").innerHTML=cssubjects[i+3];
	   					document.getElementById("5").innerHTML=cssubjects[i+4];
					}
				else if(localStorage.branch==2)
	   				{	document.getElementById("1").innerHTML=itsubjects[i];
	   					document.getElementById("2").innerHTML=itsubjects[i+1];
	   					document.getElementById("3").innerHTML=itsubjects[i+2];
	   					document.getElementById("4").innerHTML=itsubjects[i+3];
	   					document.getElementById("5").innerHTML=itsubjects[i+4];
					}
				else if(localStorage.branch==3)
	   				{	document.getElementById("1").innerHTML=ecsubjects[i];
	   					document.getElementById("2").innerHTML=ecsubjects[i+1];
	   					document.getElementById("3").innerHTML=ecsubjects[i+2];
	   					document.getElementById("4").innerHTML=ecsubjects[i+3];
	   					document.getElementById("5").innerHTML=ecsubjects[i+4];
					}
				else if(localStorage.branch==4)
	   				{	document.getElementById("1").innerHTML=mesubjects[i];
	   					document.getElementById("2").innerHTML=mesubjects[i+1];
	   					document.getElementById("3").innerHTML=mesubjects[i+2];
	   					document.getElementById("4").innerHTML=mesubjects[i+3];
	   					document.getElementById("5").innerHTML=mesubjects[i+4];
					}
				else if(localStorage.branch==5)
	   				{	document.getElementById("1").innerHTML=civilsubjects[i];
	   					document.getElementById("2").innerHTML=civilsubjects[i+1];
	   					document.getElementById("3").innerHTML=civilsubjects[i+2];
	   					document.getElementById("4").innerHTML=civilsubjects[i+3];
	   					document.getElementById("5").innerHTML=civilsubjects[i+4];
					}


			}


		function getsubject(sub)
			{ // add if statements
				localStorage.subject=sub;
				diskitaab();
				ref();
			}
		function diskitaab(br)
			{   if(localStorage.branch==1)
				{	document.getElementById("kitaab").innerHTML="You chose "+branches[localStorage.branch-1]+" branch "+" semester "+localStorage.semester+" subject "+cssubjects[localStorage.subject];
					document.getElementById("sub").innerHTML=cssubjects[localStorage.subject];
				}
				else if(localStorage.branch==2)
				{	document.getElementById("kitaab").innerHTML="You chose "+branches[localStorage.branch-1]+" branch "+" semester "+localStorage.semester+" subject "+itsubjects[localStorage.subject];
					document.getElementById("sub").innerHTML=itsubjects[localStorage.subject];
				}
				else if(localStorage.branch==3)
				{	document.getElementById("kitaab").innerHTML="You chose "+branches[localStorage.branch-1]+" branch "+" semester "+localStorage.semester+" subject "+ecsubjects[localStorage.subject];
					document.getElementById("sub").innerHTML=ecsubjects[localStorage.subject];
				}
				else if(localStorage.branch==4)
				{	document.getElementById("kitaab").innerHTML="You chose "+branches[localStorage.branch-1]+" branch "+" semester "+localStorage.semester+" subject "+mesubjects[localStorage.subject];
					document.getElementById("sub").innerHTML=mesubjects[localStorage.subject];
				}
				else if(localStorage.branch==5)
				{	document.getElementById("kitaab").innerHTML="You chose "+branches[localStorage.branch-1]+" branch "+" semester "+localStorage.semester+" subject "+civilsubjects[localStorage.subject];
					document.getElementById("sub").innerHTML=civilsubjects[localStorage.subject];
				}
			}


    