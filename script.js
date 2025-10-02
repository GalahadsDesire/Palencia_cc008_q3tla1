function saveFormData(event) {
    // THIS IS LOCALSTORAGE NOT SESSION STORAGE PLS BEWARE - Palencia
    localStorage.setItem('fname', document.getElementById('fname').value);
    localStorage.setItem('mname', document.getElementById('mname').value);
    localStorage.setItem('lname', document.getElementById('lname').value);
    localStorage.setItem('myDate', document.getElementById('myDate').value);
    localStorage.setItem('blocation', document.getElementById('blocation').value);
    localStorage.setItem('Nationality', document.getElementById('Nationality').value);
    localStorage.setItem('Religion', document.getElementById('Religion').value);
    localStorage.setItem('Contact', document.getElementById('Contact').value);
    localStorage.setItem('Email', document.getElementById('Email').value);
    localStorage.setItem('Home', document.getElementById('Home').value);

    let sex = document.querySelector('input[name="sex"]:checked');
    localStorage.setItem('sex', sex ? sex.value : '');

    let civil = document.querySelector('input[name="civil"]:checked');
    localStorage.setItem('civil', civil ? civil.value : '');

    localStorage.setItem('fname1', document.getElementById('fname1').value);
    localStorage.setItem('mname1', document.getElementById('mname1').value);
    localStorage.setItem('lname1', document.getElementById('lname1').value);
    localStorage.setItem('RelationshipText', document.getElementById('RelationshipText').value);
    localStorage.setItem('cnum', document.getElementById('cnum').value);
    localStorage.setItem('myDate1', document.getElementById('myDate1').value);

    localStorage.setItem('uname', document.getElementById('uname').value);
    localStorage.setItem('password', document.getElementById('password').value);
    localStorage.setItem('cpassword', document.getElementById('cpassword').value);

  
    const imageInput = document.getElementById('imageUpload');
    if (imageInput.files && imageInput.files[0]) {
             event.preventDefault(); 
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('photoData', e.target.result);
            document.getElementById('mainForm').submit(); 
        reader.readAsDataURL(imageInput.files[0]);
    }
   
    }

}