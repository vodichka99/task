<template>
  <div class="container">
    <h3 class="teal-text text-lighten-2 center-align">Registration</h3>
    <div class="row">
    <form class="col s4 offset-s4">
      <div class="row">
        <div class="input-field col s12">
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">First Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <button class="waves-effect waves-light btn-large col s6 offset-s3">Submit</button>
    </form>
  </div>
  </div>
</template>
