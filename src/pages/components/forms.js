import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

const controlsCode = `<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>`;

const fileInputCode = `<form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>`;

const sizingCode = `<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">`;

const sizingCode2 = `<select class="form-control form-control-lg">
  <option>Large select</option>
</select>
<select class="form-control">
  <option>Default select</option>
</select>
<select class="form-control form-control-sm">
  <option>Small select</option>
</select>`;

const readOnlyCode = `<input class="form-control" type="text" placeholder="Readonly input here…" readonly>`;

const readOnlyPlainTextCode = `<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
</form>`;

const readOnlyPlainTextCode2 = `<form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
</form>`;

const rangeInputCode = `<form>
  <div class="form-group">
    <label for="formControlRange">Example Range input</label>
    <input type="range" class="form-control-range" id="formControlRange">
  </div>
</form>`;

const checkboxStackedCode = `<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>`;

const radioButtonCode = `<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>`;

const inlineCheckboxCode = `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>`;

const inlineRadioButtonCode = `<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>`;

const withoutLabelsCode = `<div class="form-check">
  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
</div>
<div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
</div>`;

const formGroupsCode = `<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form>`;

const formGridCode = `<form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>`;

const formRowCode = `<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>`;

const formLayoutCode = `<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>`;

const horizontalFormCode = `<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>`;

const horizontalFormLabelSizingCode = `<form>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
    </div>
  </div>
</form>`;

const columnSizingCode = `<form>
  <div class="form-row">
    <div class="col-7">
      <input type="text" class="form-control" placeholder="City">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="State">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Zip">
    </div>
  </div>
</form>`;

const autoSizingCode = `<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck">
        <label class="form-check-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>`;

const autoSizingCode2 = `<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
      </div>
    </div>
    <div class="col-auto my-1">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
        <label class="form-check-label" for="autoSizingCheck2">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>`;

const autoSizingCode3 = `<form>
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-auto my-1">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
        <label class="custom-control-label" for="customControlAutosizing">Remember my preference</label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>`;

const inlineFormsCode = `<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
  </div>

  <div class="form-check mb-2 mr-sm-2">
    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
    <label class="form-check-label" for="inlineFormCheck">
      Remember me
    </label>
  </div>

  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>`;

const inlineFormsCode2 = `<form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <div class="custom-control custom-checkbox my-1 mr-sm-2">
    <input type="checkbox" class="custom-control-input" id="customControlInline">
    <label class="custom-control-label" for="customControlInline">Remember my preference</label>
  </div>

  <button type="submit" class="btn btn-primary my-1">Submit</button>
</form>`;

const helpTextCode = `<label for="inputPassword5">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>`;

const helpTextCode2 = `<form class="form-inline">
  <div class="form-group">
    <label for="inputPassword6">Password</label>
    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>`;

const disabledCode = `<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>`;

const validationCustomStylesCode = `<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom05">Zip</label>
      <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>`;

const browserDefaultCode = `<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">State</label>
      <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>`;

const serverSideCode = `<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>`;

const supportedElementsCode = `<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea">Textarea</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
    <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
  </div>
  <div class="custom-control custom-radio mb-3">
    <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="form-group">
    <select class="custom-select" required>
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>

  <div class="custom-file">
    <input type="file" class="custom-file-input" id="validatedCustomFile" required>
    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
    <div class="invalid-feedback">Example invalid custom file feedback</div>
  </div>
</form>`;

const tooltipsCode = `<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">City</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>`;

const customCheckboxCode = `<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
</div>`;

const customCheckboxIndeterminateCode = `<div class="custom-control custom-checkbox">
  <input type="checkbox" indeterminate class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
</div>`;

const customRadioCode = `<div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
</div>`;

const customInlineCode = `<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline2">Or toggle this other custom radio</label>
</div>`;

const customDisabledCode = `<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled>
  <label class="custom-control-label" for="customCheckDisabled1">Check this custom checkbox</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" name="radioDisabled" id="customRadioDisabled2" class="custom-control-input" disabled>
  <label class="custom-control-label" for="customRadioDisabled2">Toggle this custom radio</label>
</div>`;

const customSwitchCode = `<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitch1">
  <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
</div>
<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
  <label class="custom-control-label" for="customSwitch2">Disabled switch element</label>
</div>`;

const customSelectCode = `<select class="custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;

const customSelectSizingCode = `<select class="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="custom-select custom-select-sm">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;

const customSelectMultipleCode = `<select class="custom-select" multiple>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;

const customSelectMultipleWithSizeCode = `<select class="custom-select" size="3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;

const customRangeCode = `<label for="customRange1">Example range</label>
<input type="range" class="custom-range" id="customRange1">`;

const customRangeMinMaxCode = `<label for="customRange2">Example range</label>
<input type="range" class="custom-range" min="0" max="5" id="customRange2">`;

const customRangeStepCode = `<label for="customRange3">Example range</label>
<input type="range" class="custom-range" min="0" max="5" step="0.5" id="customRange3">`;

const customFileBrowserCode = `<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>`;

const customFileBrowserWithLangCode = `<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLang" lang="es">
  <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
</div>`;

const customFileBrowserWithText = `<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLangHTML">
  <label class="custom-file-label" for="customFileLangHTML" data-browse="Bestand kiezen">Voeg je document toe</label>
</div>`;

class Forms extends React.Component {
  render() {
    return (
      <Layout>
        <h2>샘플</h2>
        <div className="mb-2">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>
          폼 컨트롤 <small>Form Controls</small>
        </h2>
        <div className="mb-2">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Example select</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">
                Example multiple select
              </label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {controlsCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">
                Example file input
              </label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {fileInputCode}
          </SyntaxHighlighter>
        </div>

        <h2>사이즈 조절</h2>
        <div className="mb-2">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder=".form-control-lg"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
          />
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder=".form-control-sm"
          />
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizingCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <select className="form-control form-control-lg">
            <option>Large select</option>
          </select>
          <select className="form-control">
            <option>Default select</option>
          </select>
          <select className="form-control form-control-sm">
            <option>Small select</option>
          </select>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizingCode2}
          </SyntaxHighlighter>
        </div>

        <h2>읽기 전용</h2>
        <div className="mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="Readonly input here…"
            readOnly
          />
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {readOnlyCode}
          </SyntaxHighlighter>
        </div>

        <h2>텍스트처럼 표시되는 읽기 전용 인풋</h2>

        <div className="mb-2">
          <form>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {readOnlyPlainTextCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <form className="form-inline">
            <div className="form-group mb-2">
              <label htmlFor="staticEmail2" className="sr-only">
                Email
              </label>
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail2"
                value="email@example.com"
              />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Confirm identity
            </button>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {readOnlyPlainTextCode2}
          </SyntaxHighlighter>
        </div>

        <h2>Range Inputs</h2>
        <div className="mb-2">
          <form>
            <div className="form-group">
              <label htmlFor="formControlRange">Example Range input</label>
              <input
                type="range"
                className="form-control-range"
                id="formControlRange"
              />
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {rangeInputCode}
          </SyntaxHighlighter>
        </div>

        <h2>체크박스와 라디오 버튼</h2>
        <h3>기본</h3>
        <div className="mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck2"
              disabled
            />
            <label className="form-check-label" htmlFor="defaultCheck2">
              Disabled checkbox
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {checkboxStackedCode}
          </SyntaxHighlighter>
        </div>

        <h3>라디오 버튼</h3>
        <div className="mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Second default radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option3"
              disabled
            />
            <label className="form-check-label" htmlFor="exampleRadios3">
              Disabled radio
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {radioButtonCode}
          </SyntaxHighlighter>
        </div>

        <h3>인라인</h3>
        <div className="mb-2">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              2
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
              disabled
            />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              3 (disabled)
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {inlineFormsCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              2
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
              disabled
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              3 (disabled)
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {inlineFormsCode2}
          </SyntaxHighlighter>
        </div>

        <h3>라벨이 없는 경우</h3>
        <div className="mb-2">
          <div className="form-check">
            <input
              className="form-check-input position-static"
              type="checkbox"
              id="blankCheckbox"
              value="option1"
              aria-label="..."
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input position-static"
              type="radio"
              name="blankRadio"
              id="blankRadio1"
              value="option1"
              aria-label="..."
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {withoutLabelsCode}
          </SyntaxHighlighter>
        </div>

        <h2>레이아웃</h2>
        <h3>
          폼 그룹 <small>Form Groups</small>
        </h3>
        <div className="mb-2">
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Example label</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Another label</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input"
              />
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {formGroupsCode}
          </SyntaxHighlighter>
        </div>

        <h3>폼 그리드</h3>
        <div className="mb-2">
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {formGridCode}
          </SyntaxHighlighter>
        </div>

        <h3>폼 row</h3>
        <div className="mb-2">
          <form>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {formRowCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {formLayoutCode}
          </SyntaxHighlighter>
        </div>

        <h3>가로 폼</h3>
        <div className="mb-2">
          <form>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                />
              </div>
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      checked
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      First radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Second radio
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="option3"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="gridRadios3">
                      Third disabled radio
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <div className="col-sm-2">Checkbox</div>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Example checkbox
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {horizontalFormCode}
          </SyntaxHighlighter>
        </div>

        <h3>라벨 사이즈가 적용된 가로 폼</h3>
        <div className="mb-2">
          <form>
            <div className="form-group row">
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="col-form-label-sm"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="colFormLabel"
                  placeholder="col-form-label"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="colFormLabelLg"
                className="col-sm-2 col-form-label col-form-label-lg"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="colFormLabelLg"
                  placeholder="col-form-label-lg"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {horizontalFormLabelSizingCode}
          </SyntaxHighlighter>
        </div>

        <h3>컬럼 사이즈 조절</h3>
        <div className="mb-2">
          <form>
            <div className="form-row">
              <div className="col-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Zip" />
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {columnSizingCode}
          </SyntaxHighlighter>
        </div>

        <h3>자동 사이즈 조절</h3>
        <div className="mb-2">
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <label className="sr-only" htmlFor="inlineFormInput">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="col-auto">
                <label className="sr-only" htmlFor="inlineFormInputGroup">
                  Username
                </label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="col-auto">
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label className="form-check-label" htmlFor="autoSizingCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {autoSizingCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <form>
            <div className="form-row align-items-center">
              <div className="col-sm-3 my-1">
                <label className="sr-only" htmlFor="inlineFormInputName">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputName"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="col-sm-3 my-1">
                <label
                  className="sr-only"
                  htmlFor="inlineFormInputGroupUsername"
                >
                  Username
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="col-auto my-1">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="autoSizingCheck2"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-auto my-1">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {autoSizingCode2}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto my-1">
                <label
                  className="mr-sm-2 sr-only"
                  htmlFor="inlineFormCustomSelect"
                >
                  Preference
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-auto my-1">
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlAutosizing"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customControlAutosizing"
                  >
                    Remember my preference
                  </label>
                </div>
              </div>
              <div className="col-auto my-1">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {autoSizingCode3}
          </SyntaxHighlighter>
        </div>

        <h3>인라인 폼</h3>
        <div className="mb-2">
          <form className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInputName2">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Jane Doe"
            />

            <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
              Username
            </label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername2"
                placeholder="Username"
              />
            </div>

            <div className="form-check mb-2 mr-sm-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineFormCheck"
              />
              <label className="form-check-label" htmlFor="inlineFormCheck">
                Remember me
              </label>
            </div>

            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {inlineFormsCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <form className="form-inline">
            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              Preference
            </label>
            <select
              className="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div className="custom-control custom-checkbox my-1 mr-sm-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customControlInline"
              />
              <label
                className="custom-control-label"
                htmlFor="customControlInline"
              >
                Remember my preference
              </label>
            </div>

            <button type="submit" className="btn btn-primary my-1">
              Submit
            </button>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {inlineFormsCode2}
          </SyntaxHighlighter>
        </div>

        <h2>안내 텍스트</h2>
        <div className="mb-2">
          <label htmlFor="inputPassword5">Password</label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
          />
          <small id="passwordHelpBlock" className="form-text text-muted">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </small>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {helpTextCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="inputPassword6">Password</label>
              <input
                type="password"
                id="inputPassword6"
                className="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
              />
              <small id="passwordHelpInline" className="text-muted">
                Must be 8-20 characters long.
              </small>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {helpTextCode2}
          </SyntaxHighlighter>
        </div>

        <h2>비활성 폼</h2>
        <div className="mb-2">
          <form>
            <fieldset disabled>
              <div className="form-group">
                <label htmlFor="disabledTextInput">Disabled input</label>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Disabled input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="disabledSelect">Disabled select menu</label>
                <select id="disabledSelect" className="form-control">
                  <option>Disabled select</option>
                </select>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    disabled
                  />
                  <label
                    className="form-check-label"
                    htmlFor="disabledFieldsetCheck"
                  >
                    Can't check this
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {disabledCode}
          </SyntaxHighlighter>
        </div>

        <h2>폼 검증</h2>
        <h3>커스텀 스타일</h3>
        <div className="mb-2">
          <form
            className="needs-validation"
            noValidate
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="First name"
                  value="Mark"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  placeholder="Last name"
                  value="Otto"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustomUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustomUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom03">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  placeholder="City"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationCustom04">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom04"
                  placeholder="State"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationCustom05">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  placeholder="Zip"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {validationCustomStylesCode}
          </SyntaxHighlighter>
        </div>

        <h3>브라우저 기본 검증 사용</h3>
        <div className="mb-2">
          <form>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationDefault01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="First name"
                  value="Mark"
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationDefault02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  placeholder="Last name"
                  value="Otto"
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationDefaultUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend2">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationDefault03">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="City"
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault04">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault04"
                  placeholder="State"
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault05">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault05"
                  placeholder="Zip"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {browserDefaultCode}
          </SyntaxHighlighter>
        </div>

        <h3>서버사이드 검증 반영</h3>
        <div className="mb-2">
          <form>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationServer01">First name</label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="validationServer01"
                  placeholder="First name"
                  value="Mark"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationServer02">Last name</label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="validationServer02"
                  placeholder="Last name"
                  value="Otto"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationServerUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend3">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationServerUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend3"
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationServer03">City</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer03"
                  placeholder="City"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">State</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer04"
                  placeholder="State"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Zip</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer05"
                  placeholder="Zip"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input is-invalid"
                  type="checkbox"
                  value=""
                  id="invalidCheck3"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {serverSideCode}
          </SyntaxHighlighter>
        </div>

        <h3>안내 텍스트</h3>
        <div className="mb-2">
          <form className="was-validated">
            <div className="mb-3">
              <label htmlFor="validationTextarea">Textarea</label>
              <textarea
                className="form-control is-invalid"
                id="validationTextarea"
                placeholder="Required example textarea"
                required
              />
              <div className="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>

            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customControlValidation1"
                required
              />
              <label
                className="custom-control-label"
                htmlFor="customControlValidation1"
              >
                Check this custom checkbox
              </label>
              <div className="invalid-feedback">
                Example invalid feedback text
              </div>
            </div>

            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                id="customControlValidation2"
                name="radio-stacked"
                required
              />
              <label
                className="custom-control-label"
                htmlFor="customControlValidation2"
              >
                Toggle this custom radio
              </label>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input
                type="radio"
                className="custom-control-input"
                id="customControlValidation3"
                name="radio-stacked"
                required
              />
              <label
                className="custom-control-label"
                htmlFor="customControlValidation3"
              >
                Or toggle this other custom radio
              </label>
              <div className="invalid-feedback">
                More example invalid feedback text
              </div>
            </div>

            <div className="form-group">
              <select className="custom-select" required>
                <option value="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="invalid-feedback">
                Example invalid custom select feedback
              </div>
            </div>

            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="validatedCustomFile"
                required
              />
              <label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                Choose file...
              </label>
              <div className="invalid-feedback">
                Example invalid custom file feedback
              </div>
            </div>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {supportedElementsCode}
          </SyntaxHighlighter>
        </div>

        <h3>툴팁</h3>
        <div className="mb-2">
          <form
            className="needs-validation"
            noValidate
            onSubmit={event => event.preventDefault()}
          >
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationTooltip01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip01"
                  placeholder="First name"
                  value="Mark"
                  required
                />
                <div className="valid-tooltip">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationTooltip02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip02"
                  placeholder="Last name"
                  value="Otto"
                  required
                />
                <div className="valid-tooltip">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationTooltipUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="validationTooltipUsernamePrepend"
                    >
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltipUsername"
                    placeholder="Username"
                    aria-describedby="validationTooltipUsernamePrepend"
                    required
                  />
                  <div className="invalid-tooltip">
                    Please choose a unique and valid username.
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationTooltip03">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip03"
                  placeholder="City"
                  required
                />
                <div className="invalid-tooltip">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationTooltip04">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip04"
                  placeholder="State"
                  required
                />
                <div className="invalid-tooltip">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationTooltip05">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip05"
                  placeholder="Zip"
                  required
                />
                <div className="invalid-tooltip">
                  Please provide a valid zip.
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {tooltipsCode}
          </SyntaxHighlighter>
        </div>

        <h2>커스텀 폼</h2>
        <h3>체크박스</h3>
        <div className="mb-2">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Check this custom checkbox
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customCheckboxCode}
          </SyntaxHighlighter>
        </div>

        <h3>라디오 버튼</h3>
        <div className="mb-2">
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" htmlFor="customRadio1">
              Toggle this custom radio
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              className="custom-control-input"
            />
            <label className="custom-control-label" htmlFor="customRadio2">
              Or toggle this other custom radio
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customRadioCode}
          </SyntaxHighlighter>
        </div>

        <h3>인라인</h3>
        <div className="mb-2">
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline1"
              name="customRadioInline1"
              className="custom-control-input"
            />
            <label
              className="custom-control-label"
              htmlFor="customRadioInline1"
            >
              Toggle this custom radio
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline2"
              name="customRadioInline1"
              className="custom-control-input"
            />
            <label
              className="custom-control-label"
              htmlFor="customRadioInline2"
            >
              Or toggle this other custom radio
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customInlineCode}
          </SyntaxHighlighter>
        </div>

        <h3>비활성 상태</h3>
        <div className="mb-2">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheckDisabled1"
              disabled
            />
            <label
              className="custom-control-label"
              htmlFor="customCheckDisabled1"
            >
              Check this custom checkbox
            </label>
          </div>

          <div className="custom-control custom-radio">
            <input
              type="radio"
              name="radioDisabled"
              id="customRadioDisabled2"
              className="custom-control-input"
              disabled
            />
            <label
              className="custom-control-label"
              htmlFor="customRadioDisabled2"
            >
              Toggle this custom radio
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customDisabledCode}
          </SyntaxHighlighter>
        </div>

        <h3>스위치</h3>
        <div className="mb-2">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              Toggle this switch element
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              disabled
              id="customSwitch2"
            />
            <label className="custom-control-label" htmlFor="customSwitch2">
              Disabled switch element
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customSwitchCode}
          </SyntaxHighlighter>
        </div>

        <h3>셀렉트 메뉴</h3>
        <div className="mb-2">
          <select className="custom-select">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customSelectCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <select className="custom-select custom-select-lg mb-3">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select className="custom-select custom-select-sm">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customSelectSizingCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <select className="custom-select" multiple>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customSelectMultipleCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <select className="custom-select" size="3">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customSelectMultipleWithSizeCode}
          </SyntaxHighlighter>
        </div>

        <h3>Range</h3>
        <div className="mb-2">
          <label htmlFor="customRange1">Example range</label>
          <input type="range" className="custom-range" id="customRange1" />
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customRangeCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <label htmlFor="customRange2">Example range</label>
          <input
            type="range"
            className="custom-range"
            min="0"
            max="5"
            id="customRange2"
          />
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customRangeMinMaxCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <label htmlFor="customRange3">Example range</label>
          <input
            type="range"
            className="custom-range"
            min="0"
            max="5"
            step="0.5"
            id="customRange3"
          />
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customRangeStepCode}
          </SyntaxHighlighter>
        </div>

        <h3>파일 브라우저</h3>
        <div className="mb-2">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" />
            <label className="custom-file-label" htmlFor="customFile">
              Choose file
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customFileBrowserCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFileLang"
              lang="ko"
            />
            <label className="custom-file-label" htmlFor="customFileLang">
              파일 선택
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customFileBrowserCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFileLangHTML"
            />
            <label
              className="custom-file-label"
              htmlFor="customFileLangHTML"
              data-browse="파일 찾아보기"
            >
              파일을 선택하세요
            </label>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customFileBrowserCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }

  componentDidMount() {
    const forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener(
        'submit',
        function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        },
        false
      );
    });
  }
}

export default Forms;
