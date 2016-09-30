
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
   		
   		var cssem7=[/* Compiler Design 5*/' A. V. Aho, R. Sethi, and J. D. Ullman. Compilers: Principles, Techniques and Tools , Pearson Education','Raghavan, Compiler Design, TMH Pub','Louden. Compiler Construction: Principles and Practice, Cengage Learning','A. C. Holub. Compiler Design in C , Prentice-Hall Inc., 1993','Mak, writing compiler & Interpreters, Willey Pub','','',/* Distributed System 4*/'Sinha, Distributed Operating System Concept & Design, PHI','Coulouris & Dollimore, Distributed System Concepts and Design, Pearson Pub',' Singhal & Shivratari, Advance Concept in Operating System, McGraw Hill','Attiya & Welch, Distributed Computing, Wiley Pub','','','',/* Cloud Computing 5*/'Buyya, Selvi ,” Mastering Cloud Computing “,TMH Pub','Kumar Saurabh, “Cloud Computing” , Wiley Pub','Krutz , Vines, “Cloud Security “ , Wiley Pub','Velte, “Cloud Computing- A Practical Approach” ,TMH Pub','Sosinsky, “ Cloud Computing” , Wiley Pub','','',/* I.S.M 6*/'G. Somasundaram & Alok Shrivastava (EMC Education Services) editors; Information Storage and Management: Storing, Managing, and Protecting Digital Information; Wiley India','Ulf Troppens, Wolfgang Mueller-Friedt, Rainer Erkens, Rainer Wolafka, Nils Haustein; Storage Network explained : Basic and application of fiber channels, SAN, NAS, iSESI, INFINIBAND and FCOE, Wiley India','John W. Rittinghouse and James F. Ransome; Cloud Computing : Implementation Management and Security, CRC Press, Taylor Frances Pub',' Nick Antonopoulos, Lee Gillam; Cloud Computing : Principles, System & Application, Springer',' Anthony T. Velete, Toby J.Velk, and Robert Eltenpeter, Cloud Computing : A practical Approach, TMH Pub.','Saurabh , Cloud Computing : Insight into New Era I','',/* Elective-I */'','','','','','',''];

   		var cssem8=[/* Soft Computing 7*/'S, Rajasekaran & G.A. Vijayalakshmi Pai, Neural Networks, Fuzzy Logic & Genetic Algorithms, Synthesis & applications, PHI Publication','S.N. Sivanandam & S.N. Deepa, Principles of Soft Computing, Wiley Publications','Rich E and Knight K, Artificial Intelligence, TMH, New Delhi.','Bose, Neural Network fundamental with Graph , Algo.& Appl, TMH','Kosko: Neural Network & Fuzzy System, PHI Publication','Klir & Yuan ,Fuzzy sets & Fuzzy Logic: Theory & Appli.,PHI Pub','Hagen, Neural Network Design, Cengage Learning',/* Web Engg. 7 */' Roger S.Pressman, David Lowe, “Web Engineering”','Achyut S Godbole and Atul Kahate, “Web Technologies”','Gopalan N P , Akilandeswari,  “Web Technology: A Developer s Perspective” , PHI','Neil Gray,  “Web server Programming” Wiley','Chris Bates, “Web Programming: Building Internet applications” Wiley','Moller, An Introduction to XML and Web Technologies','“Web Technologies: Black Book”, Kogent, Dreamtech',/* Network Management 6*/'','','','','','','',/* Elective III */'','','','','','','',/* Elective IV */'','','','','','',''];

   			

   		var civilsem3=[/* M-2 5 */'Advanced Engg. Mathematics by Erwin Kreyszig, Wiley India','Higher Engg. Mathematics by BS Grewal, Khanna Publication','Advanced Engg. Mathematics by D.G.Guffy','Mathematics for Engg. by S.Arumungum','Engg. Mathematics by S S Sastri, P.H.I','','',/* TBT 7*/'Chakraborty and Das; Principles of transportation engineering; PHI','Rangwala SC; Railway Engineering; Charotar Publication House, Anand ',' Rangwala SC; Bridge Engineering; Charotar Publication House, Anand','Ponnuswamy; Bridge Engineering; TMH','Railway Engineering by Arora & Saxena - Dhanpat Rai & Sons','Railway Track by K.F. Antia','Principles and Practice of Bridge Engineering S.P. Bindra - Dhanpat Rai & Sons',/* SOM 7*/'Nash; Strength of Materials (Schaum), TMH','Rattan SS; strength of Materials; TMH','Negi; Strength of materials; TMH',' Sadhu Singh; Strength of Materials','Ramamrutham; Strength of Materials','Subramaniam; Strength of Materials; R; Oxford','National Building Code of India, Part-IV',/* Engg. Geology 4 */'Prabin Singh – “Engineering and General Geology','Gulati ; Geotechnical Engineering; TMH','P.K. Mukerjee – “ A text Book of Geology','S.K. Garg – “ A text Book of Physical and Engineering Geology','','','',/* B.D.D 3 */'Malik & Meo; Building Design and Drawing','Shah, Kale & Patki; Building Design and Drawing; TMH','Gurucharan Singh & Jgdish Singh Building Planning, Design and Scheduling','','','',''];

   		var civilsem4=[/* M-3 6 */'JH Mathews & KD Fink: Numerical methods using Matlab','MKJain,Iyengar & RK Jain: Numerical methods for scientific and Engg. Computation','Mathematical Methods by KV Suryanarayan Rao','Numerical Methods using Matlab by Yang','Probability & Statistics by Ravichandran','Mathematical Statistics by George R','',/* Concrete Technology */' Varshney RS; Concrete Technology; Oxfored & IBH','Gambhir ML; Concrete Technology – TMH','Sinha SN; Reinforced Concrete Technology; TMH','New Building Materials Published by B.M.T.P.C','Hand books on Materials & Technology - Published by BMTPC & HUDCO','Mohan Rai & M.P. Jai Singh; Advances in Building Materials & Construction','Jackson N; Civil Engineering materials.',/* Surveying */'T.P. Kanetkar, Surveying & Levelling, Vol. I & II','Duggal; Surveying vol I and II; TMH','Basak; Surveying and Leveling; TMH','R.E.Devis, Surveying theory & Practice, Mc.Graw Hill, New York','David Clark & J Clendinning, Plane & Geodetic surveying Vol. I & II, constable & Co. London.','S.K. Roy, Fundamentals of surveying, prentice - Hall of India','B.C. Punmia, Surveying Vol. I, II, III, Laxmi Publications',/* CMT */'Mohan Rai & M.P. Jai Singh; Advance in Building Materials & Construction','S.C. Rangwala; Engineering Materials','Sushil Kumar; Building Construction','B.C. Punmia; Building Construction','Building Construction, Metchell','Construction Technology, Chudley R','Civil Engineering Materials, N. Jackson',/* Fluid Mechanics */'Modi & Seth; Fluid Mechanics','Som and Biswas; Fluid Mechnics and machinery','Cengal; Fluid Mechanics','White ; Fluid Mechanics','Essential of Engg Hyd. By JNIK DAKE; Afrikan Network & Sc Instt. (ANSTI)','Text Book of fluid Mech. for Engg. Student by Franiss JRD','R Mohanty; Fluid Mechanics'];

   		var civilsem5=[/* Transportation Engg. 7 */'Highway Engineering by Gurucharan Singh','Principles of Pavement Design by E.J. Yoder & M.W. Witzech','Highway Engineering by O’Fleherty','Highway Engineering by S.K. Khanna & C.E.G. Justo','Airport Planning & Design by S.K. Khanna & M. G. arora','Foresch, Charles “Airport Planning”','Horonjeff Robert “The Planning & Design of Airports”',/* Advanced Surveying 6 */'Surveying and Leveling-Part-I & II by T.P. Kanetkar and S.V. Kulkarini','Engineering Surveying : Theory and Examination Problems for Students by W. Schofield','Surveying: Problems Solving with theory and objective type questions by A.M. Chandra','Advance Surveying by A.M. Chandra','Surveying Vol. II by S.K. Duggal','Remote Sensing and image interpretation by Lillesand T.M. and Kiefer R.W','',/* Fluid Mech-II 7 */'Fluid Mechanics - Modi & Seth','Open Channel Flow by Rangaraju','Fluid Mechanics - A.K. Jain - Khanna Publishers','Fluid Mechanics, Hydraulics & Hydraulic Machanics - K.R. Arora','Hyd. of open channels By Bakhmetiff B.A.','Open Channel Hyd. By Chow V.T.','Engineering Hydraulics By H. Rouse',/* Structural Design & Drawing-I 7 */'Plain & Reinforced Concrete Vol. I & II – O.P. Jain & Jay Krishna','Limit State Design by P.C.Varghese ; Prentice Hall of India','Design of Reinforced Concrete Elements by Purushothman','Reinforced Cement Concrete by Gupta & Mallick','Reinforced Cement Concrete by P. Dayaratnam','Plain & reinforced concrete - Rammuttham','Plain & reinforced concrete – B.C. Punnia',/* Theory Of Structures 5 */'Ghali A & Neville M., Structural Analysis - A Unified classical and matrix Approach','Wang C.K. Intermediate structural analysis, McGraw Hill','Kinney Streling J. Indeterminate structural Analysis, Addison Wesley','Reddy C.S., Basic Structural Analysis, Tata McGraw Hill Publishing Company','Norris C.H., Wilbur J.B. and Utkys. Elementry Structural Analysis, McGraw Hill International','',''];

   		var civilsem6=[/* Theory Of Structures-II */'Wang C.K. Intermediate structural analysis','Kinney Streling J. Indeterminate structural Analysis','Reddy C.S., Basic Stgructural Analysis, Tata McGraw Hill','Norris C.H., Wilbur J.B. and Utkys. Elementary Structural Analysis','Weaver W & Gere JM, Matrix Methods of Framed Structures','','',/* Water Resources & Irrigation Engg. */'Irrigation & Water Power Engg. by Punmia & Pandey B.B.Lal','Engg. Hydrology by K. Subhramanya - Tata Mc Graw Hills','Engg. Hydrology - J.NEMEC - Prentice Hall','Hydrology for Engineers Linsley, Kohler, Paulnus','Hydrology & Flood Control by Santosh Kumar - Khanna Publishers','Engg. Hydrology by H.M. Raghunath','',/* Environmental Engg-I */'Water Supply Engineering by B.C. Punmia','Water Supply & Sanitary Engg. by G.S. Birdi','Water & Waste Water Technology by Mark J.Hammer','Environmental Engineering - H.S. Peavy & D.R.Rowe','Water Supply & Sanitary Engg. by S.K. Husain','Water & Waste Water Technology - G.M. Fair & J.C. Geyer','Relevant IS Codes',/* Geo Tech Engg.-I */'Soil Mech. & Found. Engg. by Dr. K.R. Arora','Soil Mech. & Found. by Dr. B.C.Punmia','Modern Geotech Engg. by Dr.l Aram Singh','Geotech Engg. by C. Venkatramaiah','Soil Mech. & Found. Engg. by S.K. Garg','Soil Testing for Engg. by T.W. Lambe','Relevant I.S. Codes',/* Structural Design & Drawing-II */' Design of steel structures by Arya & Azmani Nemchand & Bros','Design of steel structures by P.Dayaratnam','Design of steel structures Vol. I & II by Ramchandra','Design of steel structures by L.S. Negi','Design of steel structures by Ramammutham','Design of steel structures by Punmia',''];

   		var civilsem7=[/* Design of Hydraulic Structure */'Engineering for Dams (Volumes I, II & III) by Creager, Justin & Hinds','Hydroelectric Hand Book by Creager','Hydraulic Structures by Varshney','Irrigation & Water Power Engg. by Punmia & Pandey B.B.Lal','Water Power Engineering by Dandekar','','',/* Advanced Structural Design-II */'R.C.C. by O.P. Jain Vol. II','R.C.C. by B.C. Punmia','Essentials of Bridge engineering – D.J. Victor','Bridge Engineering - Ponnuswamy','Advanced R.C.C. Design by N.K. RAJU','N.Krishna Raju, Prestressed Concrete','Pre stresses concrete – T.Y. Lin',/* Environmental Engg.-II */'Water Supply & Sanitary Engg. - G.S. Birdie','Waste Water Engg. by B.C. Punmia','Environmental Engg. - M.L. Davis & D.A. Cornwell','Chemistry for Environmental Engg. - Sawyer & Mc Carty','Water & Waste Water Technology - Mark J Hammer','Waste Water Engineering - Metcalf & Eddy','',/* Quantity Surveying & Costing */'Quantity Surveying & Costing – B.N. Datta','Estimating & Costing for Civil Engg. – G.S. Birdi','Quantity surveying & costing – Chakraborty','Estimating & Costing – S.C. Rangawala','','','',/* Elective-I */'','','','','','',''];

   		var civilsem8=[/* GeoTechnicl Engg.-II 6 */'Soil Mechanics & Foundation Engg. by Dr. K.R. Arora','Soil Mechanics & Foundation Engg. by B.C. Punmia','Modern Geotech. Engg. by Dr. Alam Singh','Geotech. Engg. by C.Venkatramaiah','Found. Engg. by GALeonards McGraw Hill','Relevant IS Code','',/* Construction Planning & Management */'Construction Equipment by Peurify','CPM by L.S. Srinath','Construction Management by S. Seetharaman','CPM & PERT by Weist & Levy','Construction, Management & Accounts by Harpal Singh','Tendering & Contracts by T.A. Talpasai','',/* Advanced Structural Design-II */'Design of Steel Structures – Ramammutham','Design of Steel Structures – Punia','Steel Str. by Ramchandra Vol II','Steel Str. by Arya & Ajmani','Design of steel structures – L.S. Negi','','',/*  Elective-II */'','','','','','',''];

   		var itsem3=[/**/'Object oriented programming in C++ by Robert Lafore','J. Rumbaugh, Object-Oriented Modeling and Design using UML','Balagurusamy; Object oriented programming with C++','Rajesh K Shukla, Object Oriented Programming by C++','Kahate A; Object oriented analysis and design','Ken Barclay, Object oriented design with C++','Kamthane,”Object Oriented Programming using Turbo C++”'];

   		var itsem4=[/**/'Elmasri, Navathe, “Fundamentals Of Database Systems”','Korth, Silbertz, Sudarshan, “Database Concepts”','Toledo; Data base management systems;TMH','Panneeselvam “Database Management System” PHI','Date C J, “An Introduction To Database System”, Addision Wesley','Majumdar ; DBMS; TMH','Oracle 9i Database Administration fundamental – I, volume 1'];
   					
   		
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

   				if(localStorage.branch==2 && (localStorage.subject==12 || localStorage.subject==17))
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
