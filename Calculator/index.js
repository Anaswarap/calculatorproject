function buttonclick(val)
{
    
    document.getElementById("screen").value+=val

}
function btnclear()
{
    document.getElementById("screen").value=""
}
function buttonequalresult()
{
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result
}