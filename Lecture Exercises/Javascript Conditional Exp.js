//This is an example of a conditional javascript expression 
//the frist is an if else depending ona valoue and the second is a switch case 
//which depends ina  colour
<script>
if ( s.length > 10 ) {
    s=s.substring(0, 10);
} else {
    s=s.trim();
}

switch ( Math.floor(Math.random()*3) ) {
    case 1: col = "red";
    break;
    case 2: col = "blue";
    break;
    default: col = "green";
}
</script>