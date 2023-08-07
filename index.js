function submitData(userName,userEmail){
 
    const url ='http://localhost:3000/users'
    const userData = {name: userName, email: userEmail}
    const postData = {
        method : "POST",
        headers : {
            "content-type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(userData)
        }

        fetch(url,postData)
            .then(response => response.json())
            .then(resData => 
                document.body.innerHTML = resData.id
                )
            .catch(error => {
                document.body.innerHTML = error.message
            })
}

submitData("leah","leahochi@yahoo.com")