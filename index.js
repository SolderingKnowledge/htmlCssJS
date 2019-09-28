function getTypes(arr){
    const map = {}
    for(let i=0; i<arr.length; i++){
      if(map[typeof arr[i]] && typeof arr[i] !== "object"){
          map[typeof arr[i]]++;
      }
      else if (map[typeof arr[i]] && map[typeof arr[i]] == "object" && !Array.isArray(arr[i])){
        map[typeof arr[i]]++;
      }
      else {
        if(Array.isArray(arr[i])){
          map["array"]= 1;
        }
        else{
          map[typeof arr[i]]=1;
        }
      }
    }
    return map;
  }
  const data = [1,"asd",undefined, {}, [], 2,3];
  console.log(getTypes(data));
  
  //{ number:3, string: 1, undefined: 1, object: 1, array: 1 }