<template>
  <div class="live-countries">
    <div class="sec-one">
      <h1>Countries</h1>
    </div>
    <div class="sec-main">
      <div class="search-input">
        <form class="d-flex search" role="search">
          <img src="../../assets/image/search.svg" alt="search button" />
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
      </div>
      <div class="countries-sec">
        <ul>
          <li>
            <div class="countries">
              <div class="countries-icon">
                <img src="../../assets/image/az.svg" alt="lig icon" />
              </div>
              <h1>Azerbaijan</h1>
            </div>
          </li>
          <li>
            <div class="countries">
              <div class="countries-icon">
                <img src="../../assets/image/georgia-flag.svg" alt="lig icon" />
              </div>
              <h1>Georgia</h1>
            </div>
          </li>
          <li>
            <div class="countries">
              <div class="countries-icon">
                <img src="../../assets/image/france.svg" alt="lig icon" />
              </div>
              <h1>France</h1>
            </div>
          </li>
          <li>
            <div class="countries">
              <div class="countries-icon">
                <img src="../../assets/image/greece-flag.svg" alt="lig icon" />
              </div>
              <h1>Greece</h1>
            </div>
          </li>
          <li>
            <div class="countries">
              <div class="countries-icon">
                <img src="../../assets/image/norway-flag.svg" alt="lig icon" />
              </div>
              <h1>Norway</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="sec-footer">
      <img
        src="../../assets/image/down-arrow.svg"
        alt="down arrow icon"
        class="arrow-icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "countriesLive",

  methods: {},
};
</script>

<style scoped></style>
