AFRAME.registerComponent('lightsaber-controls', {
    events: {
        buttondown: function(e) {
            if (e.detail.id !== 4) {
                return;
            }

            this.elLightsaberBlade.emit('toggleBlade');
        }
    },

    init: function() {
        this.elLightsaberBlade = this.el.querySelector('[lightsaber-blade]');
    }
});