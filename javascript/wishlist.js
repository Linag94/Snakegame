$("a").click(function() {
    console.log("classname - " + this.className)
    if(this.className=="" || this.className == "remove")
        this.className = "add";
    else 
        this.className = "remove";
  });