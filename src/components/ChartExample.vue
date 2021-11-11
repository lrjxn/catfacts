<template>
    <div>
        <button class="button is-primary" @click="addVote">Add vote</button>
        <chart :data="votes" type="line" :labels="labels"></chart>
    </div>
</template>

<script>
import Chart from './Chart.vue';

export default {
  components: { Chart },
    data(){
        return {
            votes: [12, 19, 3, 5, 2, 3],
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
        }
    },
    methods: {
        addVote(){
            //this.votes[0]++;
            //this.$set(this.votes, 0, this.votes[0]+1);

            let changedVotes = [...this.votes];
            changedVotes[0]++;
            this.votes = changedVotes;
            
            //this.votes.splice(0,1,this.votes[0]+1)
        }
    }
}
</script>

<style>

</style>