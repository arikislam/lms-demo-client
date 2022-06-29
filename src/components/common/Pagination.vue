<template>
  <ul class="pagination-list mt-3" v-if="pagination.last_page !== 1"><!-- No need pagination if only one page -->
    <li class="pagination-list__item">

      <button class="pagination-list__link" :disabled="pagination.current_page === 1" href="javascript:void(0)"
              @click.prevent="changePage(pagination.current_page - 1)">
        <i class="eicon e-arrow-left"></i>
      </button>
    </li>
    <li v-for="page in pagesNumber" class="pagination-list__item"
        :class="{'pagination-list__item--active': page === pagination.current_page}">

      <button href="javascript:void(0)" @click.prevent="changePage(page)"
              :disabled=" page === pagination.current_page" class="pagination-list__link">
        {{ page }}
      </button>

    </li>

    <li class="pagination-list__item">

      <button class="pagination-list__link" :disabled="pagination.current_page === pagination.last_page"
              href="javascript:void(0)" @click.prevent="changePage(pagination.current_page + 1)">
        <i class="eicon e-arrow-right"></i>
      </button>

    </li>
  </ul>

</template>

<script>
export default {
  name: 'CommonPagination',
  props: {
    pagination: Object,
  },
  data() {
    return {
      offset: 2,
    }
  },
  mounted() {
  },
  computed: {
    pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }

      let from = this.pagination.current_page - this.offset;

      if (from < 1) {
        from = 1;
      }
      let to = from + (this.offset * 2);

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      if (to-from < 4) {
        if(to == this.pagination.current_page) {
          from = from - 2;
        }
        from = from - (to-this.pagination.current_page);
      }

      if (from < 1) {
        from = 1;
      }

      let pagesArray = [];

      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }

      return pagesArray;
    }
  },

  methods: {
    changePage(page) {
      this.pagination.current_page = page;
      this.$emit('paginate', page);

    }
  }
}
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
}
.pagination-list {
  list-style: none;
}
</style>
