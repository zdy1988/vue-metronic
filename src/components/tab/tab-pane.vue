<template>
  <div class="tabbable-line">
    <ul class="nav nav-tabs ">
      <li class="active">
        <a href="#tab_15_1" data-toggle="tab"> Section 1 </a>
      </li>
      <li>
        <a href="#tab_15_2" data-toggle="tab"> Section 2 </a>
      </li>
      <li>
        <a href="#tab_15_3" data-toggle="tab"> Section 3 </a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="tab_15_1">
        <p> I'm in Section 1. </p>
        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. </p>
      </div>
      <div class="tab-pane" id="tab_15_2">
        <p> Howdy, I'm in Section 2. </p>
        <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
          consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
        <p>
          <a class="btn green" href="ui_tabs_accordions_navs.html#tab_15_2" target="_blank"> Activate this tab via URL </a>
        </p>
      </div>
      <div class="tab-pane" id="tab_15_3">
        <p> Howdy, I'm in Section 3. </p>
        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
          eum iriure dolor in hendrerit in vulputate velit esse molestie consequat </p>
        <p>
          <a class="btn yellow" href="ui_tabs_accordions_navs.html#tab_15_3" target="_blank"> Activate this tab via URL </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      mode: {type: String}
    }
  }
</script>
