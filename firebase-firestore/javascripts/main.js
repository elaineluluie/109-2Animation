// Start you JavaScript code here.

// TODO: Use data from DataBase(db) to Render Product List
//Get the data from DataBase(db) to Render Product List
db
    .collection("workList")
    .orderBy("createdAt", "desc")//////////////////////////////////////////////////////////////////desc指反過來排，最新建立的資料放在最前面 
    .get()
    // success
    .then( function(collection){
        console.log("Get data!",collection)
        // Loop the docs
        collection.forEach( function(doc){
            // console.log('[doc]',doc)
            // console.log('[product]',doc.data())
            var product = doc.data();
            console.log('[product]',product);
            //////////////////////////////////////////////////////////////////new start
            var col = `
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="${product.Thumbnail}" class="card-img-top">
                    <div class="card-body">
                        <h4>${product.Title}</h4>
                        <p>${product.Subtitle}</p>
                    </div>
                </div>
            </div>`;//////////////////////////////////////////////////////////////////new end
            $("#productRow").append(col)
        } )
    } )
    // failed
    .catch( function(err){
        console.log("error",error)
    } )

// TODO: id="createProductForm" submit event
$("#createWorkForm").submit(function(event){
    //Prevent browser to refresh the page
    event.preventDefault();
    //when user submit this form...
    console.log("Form Submitted")
    //Create a data structure for a product
    var product = {
        Title: $("#workTitleinput").val(),
        Subtitle: $("#workSubtitleinput").val(),
        Thumbnail: $("#workThumbnailinput").val(),
        createdAt: new Date()

    }
    console.log("[product]",product)
    //Save product to our database(cloud Firestore)
    //Save product to "productList" collection of db
    db
        .collection("workList")
        .add(product)
        //success
        .then( function(){
            alert("Work created!")
        } )
        //failed
        .catch( function(err){
            console.log("[error:]",err)
            alert("Something wrong!")
        } )

} ) 
// TODO: id="loginForm" submit event
$("#loginForm").submit(function(){
    // prevent the reload action
    event.preventDefault();
    // get user email & password
    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();
    console.log(email, password);
    // use Firebase Auth Login API
    firebase.auth().signInWithEmailAndPassword(email, password)
    // function(res){} : res => {} arrow function
    .then( res => {
        console.log("Response from Firebase Server", res);
        alert("Login Successful");
        
    } )
    .catch( err => {
        console.log("Error object from Firebase Server", err);
        alert(err.message)
    } );
})

// TODO: id="signUpForm" submit event
