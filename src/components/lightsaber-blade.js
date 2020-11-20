AFRAME.registerComponent('lightsaber-blade', {
    schema: {
        active: { type: 'boolean' }
    },

    events: {
        toggleBlade: function() {
            this.el.setAttribute('lightsaber-blade', 'active', !this.data.active);
        }
    },

    update: function() {
        const { active } = this.data;
        const dur = active ? 200 : 800;
        const intensity = active ? 1 : 0;
        const position = active ? .6 : 0;
        const scale = active ? 1 : 0;

        this.el.setAttribute('animation__position', {
            property: 'object3D.position.y',
            dur,
            to: position
        });

        this.el.setAttribute('animation__light', {
            property: 'light.intensity',
            dur,
            to: intensity
        });

        this.el.setAttribute('animation__scale', {
            property: 'object3D.scale.y',
            dur,
            to: scale
        });

        this.el.emit(active ? 'lightsaber-on' : 'lightsaber-off');
    }
});