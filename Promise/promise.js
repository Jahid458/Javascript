const PromiseOne =  new Promise(function (resolve, reject){
     setTimeout( function(){
        console.log('Aync Task Completed');
        resolve();
     },1000)
} )

PromiseOne.then(function(){
  console.log('promise consumes');
})

new Promise(function(resolve, reject){
   setTimeout(function()  {
    console.log('Aync Task 2 ');
     resolve();
   }, 1000);
}).then(function(){
   console.log('Aync Task resolve');
} )


const promiseThree = new Promise((resolve, reject) => {
       setTimeout( function() {
        resolve({username:"diganto", email:"diganto199@gmail.com"})
       }, 1000);
})

promiseThree.then(function(user){
     console.log(user);
})


const promiseFour = new Promise(function(resolve, reject)  {
  setTimeout(() => {
    let error = true ;
    if(!error){
      resolve({username: "Coduname", password: "123"})
    }else{
      reject('ERROR: SOMETHING wRONG!')
    }
  }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
   console.log(username);
})
.catch(function(err) {
  console.log(err);
}).finally(()=>{
  console.log("The promiseis either resollve or reject");
})





const promiseFive = new Promise(function(resolve,reject){
  setTimeout(() => {
    let error = true ;
    if(!error){
      resolve({username: "React Js", password: "123"})
    }else{
      reject('ERROR:  JS IS wRONG!')
    }
  }, 1000);
});

async function ConsumePromiseFive(){
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
     console.log(error);
  }
}

ConsumePromiseFive();
