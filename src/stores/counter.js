import { defineStore } from "pinia";
import axios from 'axios'
import { baseUrl } from "../config";

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        documents: [],
        searchQuery: '',
        image: null,
        name: '',
        desc: '',
        idDoc: null,
        showDoc: false,
    }),
    actions: {
        changeItem(id) {
            let iD = id - 1
            this.image = this.documents[iD].image
            this.name = this.documents[iD].name
            this.desc = this.documents[iD].description
            this.idDoc = this.documents[iD].id
            this.showDoc = true
        },

        async fetchDocs() {
            try {
                const data = await axios.get(baseUrl)
                this.documents = data.data
                console.log("documents", this.documents);
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },

        deleteDoc(id) {
            console.log(id)
            this.documents = this.documents.filter(p => p.id !== id)
            this.showDoc = false
        }
    },
    getters: {
        sortedAndSearchedPosts(state) {
            return state.documents.filter((p) =>
                p.name.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        },
        currentDoc(state) {
            return state.documents
        }
    }
})