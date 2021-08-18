var conditionCard = {
    props: ['image','text','name'],
    template:`
        <div class="neu-up condition-card">
            <img v-bind:src='image' v-bind:alt='name' width="40px">
            <div><span>{{text}}</span></div>
        </div>
    `
}

// export default conditionCard;