(function(){
    window.peopleModule={
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
            this.people.forEach(( name , index) =>{
                const li=document.createElement('li');
                li.classList.add('new-name');
                const span=document.createElement('span');
                const crossIcon=document.createTextNode('×');
                 span.classList.add('remove-name')
                 span.dataset.index=index;  // store the index in a data attribute
                 li.textContent+= ' ' + name;
                 const div=document.createElement('div')
                 div.classList.add('li-div')
                 this.ol.append(div);
                 div.append(li);
                 span.append(crossIcon)
                 li.append(span);
            });
            this.bindRemoveEvents();
        },
        bindRemoveEvents: function(){
            const spans = document.querySelectorAll('.remove-name');
        spans.forEach( span =>{
                span.addEventListener('click' , this.removeName.bind(this));
            });
        },
        
removeName: function(event) {
    const span=event.target.closest('.remove-name');
    const index=span.dataset.index;
    peopleModule.people.splice(index,1);
    this.displayName();
  },
}
        peopleModule.init();
})();