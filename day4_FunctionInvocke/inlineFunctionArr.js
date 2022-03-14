function setActiveTab(activeTabHandler, tab){
 //set active tab
 //call handler
 activeTabHandler();
}
setActiveTab( function (){
 console.log( "Setting active tab" );
}, 1 );