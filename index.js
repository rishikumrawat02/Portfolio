//  Responsive navbar js
const menubar = document.getElementById('menubar');
menubar.addEventListener('click',()=>{
    var navlist = document.getElementById('navlist');
    navlist.classList.toggle('active');
    if(navlist.classList.contains('active')){
        document.getElementById('menuimg').src='Images/crossIcon.svg';
    }else{
        document.getElementById('menuimg').src='Images/menubar.jpg';
    }
});

// Typing Animation JS
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('professionText');
    const textArray = ['Web Developer', 'Java Programmer', 'Problem Solver', 'Quick Learner'];
    let currentIndex = 0;
  
    function typeText() {
      currentIndex=(currentIndex+1)%textArray.length;
      const currentText = textArray[currentIndex];
      let typedText = '';
      let index = 0;
  
      function type() {
        if (index < currentText.length) {
          typedText += currentText.charAt(index);
          textElement.textContent = typedText;
          index++;
          setTimeout(type, 100);
        } else {
          setTimeout(eraseText, 1500);
        }
      }
  
      function eraseText() {
        if (typedText.length > 0) {
          typedText = typedText.slice(0, -1);
          textElement.textContent = typedText;
          setTimeout(eraseText, 50);
        } else {
          setTimeout(typeText, 500);
        }
      }
  
      type();
    }
  
    typeText();
  }
);



// About content change js
const honors = document.getElementsByClassName("honorscol");

const buttonPressed = e => {
    const id = e.target.id;
    const ulList = document.getElementById('honorsList');
    if (id == "skill") {
        const html = `<li class="liItem"><span>Core Java</span></li>
                <li class="liItem">Web Development</li>
                <li class="liItem">Data Structures & Algorithm</li>`
        ulList.innerHTML = html;

    } else if (id == 'education') {
        const html = `<li class="liItem"><div class='degree'>B-tech in Computer Science</div>
                                        <div class='institute'>IPS Academy, Indore</div>
                                        <div class='grade'>2021-2025 || <span>CGPA: 9+</span></div></li>
                <li class="liItem"><div class='degree'>Class XII</div>
                                   <div class='institute'>Shiva Academy, Betma</div>
                                   <div class='grade'>2020-2021 || <span>Percentage:94.4%</span></div></li>
                <li class="liItem"><div class='degree'>Class X</div>
                                        <div class='institute'>Shiva Academy, Betma</div>
                                        <div class='grade'>2018-2019 || <span>Percentage:93.6%</span></div></li>`
        ulList.innerHTML = html;
    } else {
        const html = `<li class="liItem">Leetcode contest rating 1750+</li>
                <li class="liItem">500+ questions on leetcode</li>
                <li class="liItem">800+ questions on geeksforgeeks</li>
                <li class="liItem">HackerRank 5⭐ in Java</li>`
        ulList.innerHTML = html;
    }
}

for (let honor of honors) {
    honor.addEventListener("click", buttonPressed);
}




// Contact form JS
document.getElementById('submitbtn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const form = document.getElementById('contactform');
  const formData = new FormData(form);
  sendEmail(formData);
  form.reset();
});

function sendEmail(formdata) {
  console.log("rishabh");
  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "mayankkumrawat2@gmail.com",
      Password: "A2478F58C0682F1CE51C83095CD61E8E8FFB",
      To: 'rishabhkumrawat40@gmail.com',
      From: "mayankkumrawat2@gmail.com",
      Subject: 'Esehi',
      Body: `Name:${formdata.get('name')}<br>Email:${formdata.get('email')}<br>Contact:${formdata.get('contact')}<br>Subject:${formdata.get('subject')}<br>Message:${formdata.get('message')}`
  }).then(
      message => alert(message)
  );
}