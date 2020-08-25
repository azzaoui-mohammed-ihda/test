function member(name,id,grade){
    this.name=name;
    this.id=id;
    this.grade=grade;
    this.toString= function()
    {
        let str="Name :"+this.name+" ID :"+this.id+" Grade :"+this.grade;
        return str;
    }
}

function Team(name)
{
    this.name=name;
    this.member=new Array();
    this.addnumber=function(n)
    {
        this.member.push(n);
    }
    this.toString=function()
    {
        let str=(this.name+"\n");
        for (let i=0;i<this.member.length;i++)
        {
            str=str+(" "+this.member[i]+"\n");
        }
        return str;
    }
}

var m1=new member("rachid",100,"cor");
var m2=new member("mohammed",200,"gab");

var este=new Team("este");
var estg=new Team("estg");

este.addnumber(m1);
este.addnumber(m2);
console.log(este.toString())

estg.addnumber(m1);
estg.addnumber(m2);
console.log(estg.toString());




