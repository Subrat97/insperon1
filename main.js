function textToNumberBinary(str)
{
  let res="";


  for(let i=0;i<=res.length;i++)
  {
    if(str.indexOf("zero"))
    {
      res=str.replace("zero","0");
    }
    else
    {
      res=str.replace("one","1");
    }
  }
  console.log(res);
}

textToNumberBinary('one one one one zero zero zero zero')
