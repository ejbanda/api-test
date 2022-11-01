btn1.addEventListener('click', () =>{

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "AWSALB=7BitL9HXhZrOWmfchVgpH7Q/+UDR63dSJe5sc+F2tpnzctxqsoHY4SD/kGW+Q8L6fd518PczEYsk+NYzjQijHG+FC4QLYryrRd5Jc9KUfU8AkFosnyPtagBXFYsh");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode: 'no-cors'
    };
    
    fetch("http://api.amp.active.com/camping/campgrounds?pstate=CO&api_key=sfhf4e3kxqcgqar6xezx5za2", requestOptions)
      .then(response => response.text())
      .then(result => {
        debugger;
        console.log(result)})
      .catch(error => console.log('error', error));
})


//doesn't like 
// .then((res) => res.json())
//         .then(res => result = res)