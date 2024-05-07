
(function(){
    peopleModule={
        people:[],
        init : function(){
            this.domCache();
            this.bindButton();
        },
        domCache : function (){
            this.input=document.querySelector('#add-name');
            this.button=document.querySelector("#add-name-btn");
            this.ol=document.querySelector("#name-list");
        },
        bindButton: function(){
            this.button.addEventListener('click', this.addName.bind(this))
        },
        addName: function() {
        let newName=this.input.value.trim();
        if(newName !==''){
            peopleModule.people.push(newName);
            this.displayName();
           this.input.value=''
        }
        else{
            alert('enter a name!!');
        }
    },
        displayName: function(){
            this.ol.innerHTML='';
            this.people.forEach( name =>{
                const li=document.createElement('li');
                li.classList.add('new-name');
                li.textContent=name;
                this.ol.append(li);
            });
        },
    }
    peopleModule.init();
})();
