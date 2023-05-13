

// SIR FERDIE JS CODES STARTS HERE

// SIR FERDIE JS CODES ENDS HERE

// SIR JACOB JS CODES STARTS HERE

// SIR JACOB JS CODES ENDS HERE










// SIR RICHARD JS CODES STARTS HERE

// TEACHER DATA - GET METHOD
// const getTeacher = () => {



    fetch('http://localhost:3000/teachers/get-teachers')
    .then(res => res.json())
    .then(data => {
        const teacher = data.find(teacher => teacher.id === 0)

        document.querySelector("#user_name").textContent = teacher.fname
    }).catch(error => console.log(error))





// }
// getTeacher();

// STUDENTS DATA - GET METHOD  ---- HOME PAGE/TEACHER
// const getStudents = () => {
    
    
// }
// getStudents()

// const getStudents2 = () => {
     
// }
// getStudents2()
// const createExamFirstPart = () => {
//     const form = document.getElementById("create-exam");
//     const submitBtn = document.getElementById("submit-btn");
     
//     submitBtn.addEventListener('submit', (e) => {
//         e.preventDefault();
    
        
//         const formData = new FormData(form);
//         const data = Object.fromEntries(formData)

//         fetch('http://localhost:3000/teachers/create-exam-first-part', {
//         method: "POST",
//         headers: {
//             'Content-Type': "application/json"
//         },
//         body: JSON.stringify(data)
//        }).then(res => res.json())
//        .then( window.location.href = "./create_exam_part2.html" )
//     })
// }
// createExamFirstPart();
// SIR RICHARD JS CODES ENDS HERE






















// Datatable loader script in dashboard - Student data
// $(document).ready(function () {
//     $('#usersTable').DataTable({
//         pagingType: 'full_numbers',
//     });
// });
