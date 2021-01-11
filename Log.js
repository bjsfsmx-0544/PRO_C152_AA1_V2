// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

  AFRAME.registerComponent('name', {
    schema: {
      //data
    },
  
    init: function () {
      // Do something when component first attached.
    },
  
    update: function () {
      // Do something when component's data is updated.
    },
  
    remove: function () {
      // Do something the component or its entity is detached.
    },
  
    tick: function () {
      // Do something on every scene tick or frame.
    }
  });


