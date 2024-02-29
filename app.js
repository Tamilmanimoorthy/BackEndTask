const express = require("express")
const app = (express())
app.use(express.json())
var Details= [
    {
        name: "Oakridge International School",
        location: "Hyderabad, India",
        students: 1500,
        teachers: 100,
        accreditation: "IB World School",
        studentId: "001",
        dob: "2005-09-12" 
    },
    {
        name: "Phillips Exeter Academy",
        location: "Exeter, New Hampshire, USA",
        students: 1100,
        teachers: 200,
        accreditation: "NEASC",
        studentId: "002",
        dob: "2004-07-25"
    },
    {
        name: "Eton College",
        location: "Windsor, England",
        students: 1300,
        teachers: 150,
        accreditation: "Independent School Inspectorate",
        studentId: "003",
        dob: "2006-03-18"
    },
    {
        name: "Raffles Institution",
        location: "Singapore",
        students: 4000,
        teachers: 300,
        accreditation: "MOE Singapore",
        studentId: "004",
        dob: "2003-11-30"
    },
    {
        name: "Stuyvesant High School",
        location: "New York City, USA",
        students: 3000,
        teachers: 200,
        accreditation: "Middle States Association of Colleges and Schools",
        studentId: "005",
        dob: "2002-05-08"
    },
    {
        name: "Hogwarts School of Witchcraft and Wizardry",
        location: "Scotland",
        students: 1000,
        teachers: 70,
        accreditation: "Ministry of Magic",
        studentId: "006",
        dob: "1980-07-31"
    },
    {
        name: "Xavier's School for Gifted Youngsters",
        location: "Westchester County, New York, USA",
        students: 50,
        teachers: 10,
        accreditation: "Xavier Institute",
        studentId: "007",
        dob: "2000-01-01"
    },
    {
        name: "MIT",
        location: "Cambridge, Massachusetts, USA",
        students: 12000,
        teachers: 1000,
        accreditation: "NEASC",
        studentId: "008",
        dob: "1861-04-10"
    },
    {
        name: "University of Oxford",
        location: "Oxford, England",
        students: 24000,
        teachers: 3500,
        accreditation: "The Russell Group",
        studentId: "009",
        dob: "1096-12-25"
    },
    {
        name: "Tsinghua University",
        location: "Beijing, China",
        students: 39000,
        teachers: 4000,
        accreditation: "C9 League",
        studentId: "010",
        dob: "1911-04-29"
    },
    {
        name: "Stanford University",
        location: "Stanford, California, USA",
        students: 17000,
        teachers: 2300,
        accreditation: "WASC",
        studentId: "011",
        dob: "1885-10-01"
    },
    {
        name: "Harvard University",
        location: "Cambridge, Massachusetts, USA",
        students: 22000,
        teachers: 2100,
        accreditation: "NEASC",
        studentId: "012",
        dob: "1636-09-08"
    },
    {
        name: "Yale University",
        location: "New Haven, Connecticut, USA",
        students: 13000,
        teachers: 1500,
        accreditation: "NEASC",
        studentId: "013",
        dob: "1701-10-09"
    },
    {
        name: "Princeton University",
        location: "Princeton, New Jersey, USA",
        students: 8500,
        teachers: 1200,
        accreditation: "Middle States Commission on Higher Education",
        studentId: "014",
        dob: "1746-10-22"
    },
    {
        name: "University of Cambridge",
        location: "Cambridge, England",
        students: 23000,
        teachers: 3000,
        accreditation: "The Russell Group",
        studentId: "015",
        dob: "1209-01-15"
    },
    {
        name: "California Institute of Technology (Caltech)",
        location: "Pasadena, California, USA",
        students: 2300,
        teachers: 300,
        accreditation: "WASC",
        studentId: "016",
        dob: "1891-09-01"
    },
    {
        name: "ETH Zurich (Swiss Federal Institute of Technology)",
        location: "Zurich, Switzerland",
        students: 20000,
        teachers: 2500,
        accreditation: "Swissuniversities",
        studentId: "017",
        dob: "1855-04-07"
    },
    {
        name: "University of Tokyo",
        location: "Tokyo, Japan",
        students: 28000,
        teachers: 4000,
        accreditation: "MEXT",
        studentId: "018",
        dob: "1877-05-31"
    },
    {
        name: "Massachusetts Institute of Technology (MIT)",
        location: "Cambridge, Massachusetts, USA",
        students: 20000,
        teachers: 2500,
        accreditation: "NEASC",
        studentId: "019",
        dob: "1861-04-10"
    },
    {
        name: "University of California, Berkeley (UC Berkeley)",
        location: "Berkeley, California, USA",
        students: 42000,
        teachers: 5000,
        accreditation: "WASC",
        studentId: "020",
        dob: "1868-03-23"
    }
];
app.get("/api/details", (req, res) => {
    res.json(Details)
})

app.get()//sam
app.post()//tamilmani
app.put()//kowsalya
app.delete()//thirumurthi
app.listen(5000, () => {
    console.log("Server Running");
})