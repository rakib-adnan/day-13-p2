/**
 * This Is Counter Section Ja Code
 */
 const clint = document.querySelector('#clint');


 let clintDefultValue = 0;
 let clintCounter = setInterval(() => {
     if (clintDefultValue === 290) {
         clearInterval(clintCounter)
     } else {
         clintDefultValue++
         clint.innerHTML = clintDefultValue;
     }
 
 
 }, 30)
 
 // 02 project Counter
 const project = document.querySelector('#project');
 let projectDefultValue = 0;
 let projectCounter = setInterval(() => {
     if (projectDefultValue === 134) {
         clearInterval(projectCounter)
     } else {
         projectDefultValue++;
         project.innerHTML = projectDefultValue;
     }
 }, 40)
 
 // 03 teammember Counter 
 const teammember = document.querySelector('#teammember');
 let teammemberDefultValue = 0;
 let teammemberCounter = setInterval(() => {
     if (teammemberDefultValue === 36) {
         clearInterval(teammemberCounter)
     } else {
         teammemberDefultValue++;
         teammember.innerHTML = teammemberDefultValue;
     }
 }, 100)
 
 // 04 skill Counter
 const skill = document.querySelector('#skill');
 let skillDefultValue = 0;
 let skillCounter = setInterval(() => {
     if (skillDefultValue == 98) {
         clearInterval(skillCounter)
     } else {
         skillDefultValue++;
         skill.innerHTML = skillDefultValue + '%';
     }
 }, 50)
 
 
 
 /**
  * Counter Width ProgressBar
  */
 
 const time = document.querySelector('#time'); //input Field
 const start = document.querySelector('#start'); //start Button
 const count = document.querySelector('#count'); //counter
 const progress = document.querySelector('#progress'); //progress
 
 let progressCount;
 let progressIntv; //setInterval
 start.addEventListener('click', function () {
     progressCount = time.value;
 
     progressIntv = setInterval(() => {
         let progressBar = `${widthCal(time.value,(progressCount - 1))}`
         progress.style.width = `${progressBar}%`
 
         if (progressBar <= 100 && progressBar > 50) {
             progress.style.backgroundColor = 'green'
             count.style.color = 'green';
 
         } else if (progressBar <= 50 && progressBar > 25) {
             progress.style.backgroundColor = 'blue'
             count.style.color = 'blue';
 
         }
         if (progressBar <= 25 && progressBar > 15) {
             progress.style.backgroundColor = 'yellow'
             count.style.color = 'yellow';
 
         }
         if (progressBar <= 15) {
             progress.style.backgroundColor = 'red'
             count.style.color = 'red';
 
         }
 
         if (progressCount == 0) {
             clearInterval(progressIntv);
             progressCount = time.value;
             progress.style.width = `100%`
             time.value = "";
 
         } else {
             progressCount--;
             count.innerHTML = (progressCount < 10 ? '0' + progressCount : progressCount) + '%'
             console.log(progressBar);
         }
 
     }, 1000)
 })
 
 
 // Subject Marks app with notification color 
 
 const resultShit = document.querySelector('#resultShit');
 const name = document.querySelector('#name');
 const nameMassage = document.querySelector('#nameMassage');
 const fName = document.querySelector('#fName');
 const fMassage = document.querySelector('#fMassage');
 const mName = document.querySelector('#mName');
 const mMassage = document.querySelector('#mMassage');
 const age = document.querySelector('#age');
 const ageMassage = document.querySelector('#ageMassage');
 const clas = document.querySelector('#class');
 const classMassage = document.querySelector('#classMassage');
 
 
 const bn = document.querySelector('#bn');
 const bnMassage = document.querySelector('#bnMassage');
 const en = document.querySelector('#en');
 const enMassage = document.querySelector('#enMassage');
 const math = document.querySelector('#math');
 const mathMassage = document.querySelector('#mathMassage');
 const s = document.querySelector('#s');
 const sMassage = document.querySelector('#sMassage');
 const ss = document.querySelector('#ss');
 const ssMassage = document.querySelector('#ssMassage');
 const agr = document.querySelector('#agr');
 const agrMassage = document.querySelector('#agrMassage');
 
 const icon = document.querySelectorAll('.icon');
 const regx = /^[0-9]{1,3}$/;
 
 
 const nameBody = document.querySelector('#nameBody');
 const resultBody = document.querySelector('#resultBody');
 const dnone = document.querySelector('#dnone');
 const loading = document.querySelector('.loading');
 const finelResult = document.querySelector('#finelResult');
 
 //This Is Name Fild Blur Event
 
 name.addEventListener('blur', function () {
     if (name.value === "") {
         name.style.border = '1px solid red';
         icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
         nameMassage.innerHTML = '*Name Required'
     }
 })
 
 // This Is Name Field Key Up Event
 name.addEventListener('keyup', function () {
     if (name.value === "") {
         name.style.border = '1px solid red';
         icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
         nameMassage.innerHTML = '*Name Required'
     } else {
         name.style.border = '1px solid green';
         icon[0].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         nameMassage.innerHTML = ''
     }
 })
 
 // Thsi Is Fathers Name Blur Event
 fName.addEventListener('blur', function () {
     if (fName.value === "") {
         fName.style.border = '1px solid red'
         fMassage.innerHTML = "*Fathers Name Required"
         icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Fathers Name Key Up Event
 fName.addEventListener('keyup', function () {
     if (fName.value === "") {
         fName.style.border = '1px solid red'
         fMassage.innerHTML = "*Fathers Name Required"
         icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         fName.style.border = '1px solid green';
         icon[1].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         fMassage.innerHTML = ''
     }
 })
 
 // This Is Mothers Name Blur event 
 mName.addEventListener('blur', function () {
     if (mName.value === "") {
         mName.style.border = '1px solid red'
         mMassage.innerHTML = "*Fathers Name Required"
         icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Mothers Nema Key Up Event
 mName.addEventListener('keyup', function () {
     if (mName.value === "") {
         mName.style.border = '1px solid red'
         mMassage.innerHTML = "*Fathers Name Required"
         icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         mName.style.border = '1px solid green';
         icon[2].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         mMassage.innerHTML = ''
     }
 })
 
 // Thsi is Age Blur Event
 age.addEventListener('blur', function () {
     if (age.value === "") {
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Age Required'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Age Key Up Event 
 age.addEventListener('keyup', function () {
     if (age.value === "") {
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Age Required'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(age.value) === false) {
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Type Age Only Number'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         age.style.border = '1px solid green';
         icon[3].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         ageMassage.innerHTML = ''
     }
 })
 
 // Thsi is Calss Blur Event 
 clas.addEventListener('blur', function () {
     if (clas.value === "") {
         clas.style.border = '1px solid red'
         classMassage.innerHTML = '*Class Required'
         icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Class Key Up Event 
 clas.addEventListener('keyup', function () {
     if (clas.value === "") {
         clas.style.border = '1px solid red'
         classMassage.innerHTML = '*Class Required'
         icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         clas.style.border = '1px solid green';
         icon[4].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         classMassage.innerHTML = ''
     }
 })
 
 
 // This Is Bangla Field Blur Event
 bn.addEventListener('blur', function () {
     if (bn.value === "") {
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Bnagla Mark Required'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Bnagla Mark Field  Event
 bn.addEventListener('keyup', function () {
     if (bn.value === "") {
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Bnagla Mark Required'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(bn.value) === false) {
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         bn.style.border = '1px solid green';
         icon[5].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         bnMassage.innerHTML = ''
     }
 })
 
 // Thsi is English Mark Field  Blur Event 
 en.addEventListener('blur', function () {
     if (en.value === "") {
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*English Mark Required'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 // This Is English Mark Field KeyUp Event 
 en.addEventListener('keyup', function () {
 
     if (en.value === "") {
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*English Mark Required'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(en.value) === false) {
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         en.style.border = '1px solid green';
         icon[6].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         enMassage.innerHTML = ''
     }
 })
 
 // This Is Math Mark Field Blur Event 
 math.addEventListener('blur', function () {
     if (math.value === "") {
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Math Mark Required'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 // This Is Key Up Event Of Math Field 
 math.addEventListener('keyup', function () {
     if (math.value === "") {
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Math Mark Required'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(math.value) === false) {
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         math.style.border = '1px solid green';
         icon[7].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         mathMassage.innerHTML = ''
     }
 })
 
 // This Is  Science Mark Field Blur
 s.addEventListener('blur', function () {
     if (s.value === "") {
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Science Mark Required'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Science Mark Field KeyUp Event 
 s.addEventListener('keyup', function () {
     if (s.value === "") {
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Science Mark Required'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(s.value) === false) {
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         s.style.border = '1px solid green';
         icon[8].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         sMassage.innerHTML = ''
     }
 })
 // This Is Social Science Field Blur 
 ss.addEventListener('blur', function () {
     if (ss.value === "") {
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Social Science Mark Required'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Social Science Field Key Up Event 
 ss.addEventListener('keyup', function () {
     if (ss.value === "") {
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Social Science Mark Required'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(ss.value) === false) {
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         ss.style.border = '1px solid green';
         icon[9].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         ssMassage.innerHTML = ''
     }
 })
 
 // This Is Agriculture Blur Event 
 agr.addEventListener('blur', function () {
     if (agr.value === "") {
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Agriculture Mark Required'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This IS Agriculture KeyUp Event 
 agr.addEventListener('keyup', function () {
     if (agr.value === "") {
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Agriculture Mark Required'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(agr.value) === false) {
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         agr.style.border = '1px solid green';
         icon[10].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         agrMassage.innerHTML = ''
     }
 })
 
 
 resultShit.addEventListener('submit', function (e) {
     e.preventDefault()
     if (name.value === "" && fName.value === "" && mName.value === "" && age.value === "" && clas.value === "" && bn.value === "" && en.value === "" && math.value === "" && s.value === "" && ss.value === "" && agr.value === "") {
         name.style.border = '1px solid red';
         icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
         nameMassage.innerHTML = '*Name Required'
 
         fName.style.border = '1px solid red'
         fMassage.innerHTML = "*Fathers Name Required"
         icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         mName.style.border = '1px solid red'
         mMassage.innerHTML = "*Fathers Name Required"
         icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Age Required'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         clas.style.border = '1px solid red'
         classMassage.innerHTML = '*Class Required'
         icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Bnagla Mark Required'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*English Mark Required'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Math Mark Required'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Science Mark Required'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Social Science Mark Required'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Agriculture Mark Required'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (name.value === "") {
         name.style.border = '1px solid red';
         icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
         nameMassage.innerHTML = '*Name Required'
     } else if (fName.value === "") {
         fName.style.border = '1px solid red'
         fMassage.innerHTML = "*Fathers Name Required"
         icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (mName.value === "") {
         mName.style.border = '1px solid red'
         mMassage.innerHTML = "*Fathers Name Required"
         icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(age.value) === false) {
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Age Required'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (clas.value === "") {
         clas.style.border = '1px solid red'
         classMassage.innerHTML = '*Class Required'
         icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(bn.value) === false) {
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Bnagla Mark Required'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(en.value) === false) {
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*English Mark Required'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(math.value) === false) {
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Math Mark Required'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(s.value) === false) {
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Science Mark Required'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(ss.value) === false) {
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Social Science Mark Required'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(agr.value) === false) {
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Agriculture Mark Required'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         loading.innerHTML = 'Loading......'
         setTimeout(() => {
             loading.classList.add('d-none')
             dnone.classList.remove('result-body')
             nameBody.innerHTML = `
                 <tr>
                     <td>01</td>
                     <td>${name.value}</td>
                     <td>${fName.value}</td>
                     <td>${mName.value}</td>
                     <td>${age.value} years</td>
                     <td>${clas.value}</td>
                     
                 </tr>
             `
             resultBody.innerHTML = `
                 <tr>
                     <td>01</td>
                     <td>Bangla</td>
                     <td>${bn.value}</td>
                     <td>${gpa(bn.value)}</td>
                     <td>${gread(bn.value)}</td>
                 </tr>
                 <tr>
                     <td>02</td>
                     <td>English</td>
                     <td>${en.value}</td>
                     <td>${gpa(en.value)}</td>
                     <td>${gread(en.value)}</td>
                 </tr>
                 <tr>
                     <td>03</td>
                     <td>Math</td>
                     <td>${math.value}</td>
                     <td>${gpa(math.value)}</td>
                     <td>${gread(math.value)}</td>
                 </tr>
                 <tr>
                     <td>04</td>
                     <td>Science</td>
                     <td>${s.value}</td>
                     <td>${gpa(s.value)}</td>
                     <td>${gread(s.value)}</td>
                 </tr>
                 <tr>
                     <td>05</td>
                     <td>Social Science</td>
                     <td>${ss.value}</td>
                     <td>${gpa(ss.value)}</td>
                     <td>${gread(ss.value)}</td>
                 </tr>
                 <tr>
                     <td>06</td>
                     <td>Agriculture</td>
                     <td>${agr.value}</td>
                     <td>${gpa(agr.value)}</td>
                     <td>${gread(agr.value)}</td>
                 </tr>
             `
             finelResult.innerHTML = cgpa(gpa(bn.value),gpa(en.value),gpa(math.value),gpa(s.value),gpa(ss.value),gpa(agr.value));
             name.value = "";
             fName.value = "";
             mName.value = "";
             age.value = "";
             clas.value = "";
             bn.value = "";
             en.value = "";
             math.value = "";
             s.value = "";
             ss.value = "";
             agr.value = "";
         }, 3000)
     }
 })