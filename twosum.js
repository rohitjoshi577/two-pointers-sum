let a = [3,4,5,6,9 ,12];
let target = 24; 

let i = 0;



for(let i =0 ;i<=a.length-3;i++){

    let j = i+1;
    let k = a.length-1;

    while(j<k){
        if(a[j]+a[k] > target -a[i]){
            k--
        }

        else if(a[j]+a[k] <target -a[i]){
            j++
        }

        else{
            console.log(a[i], a[j] , a[k]);
            return;
        }
    }

}


