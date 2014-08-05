# flintstones

a [Sails](http://sailsjs.org) application to demonstrate the need for a way to create test fixtures in a sensible manner.

### Installation

  1. `npm install`
  2. `npm install mocha -g`

### Usage

  1. `mocha`

### TODO
  - Make tests pass!
    - The problem is that the `unique: true` property of the models' `name` attributes makes Waterline throw validation errors when we create users and their associated pets, or vice-versa.
    - How do we avoid these errors and create the fixtures regardless of whether an associated record already exists?
