class HelloWorld {
  say() {
    console.log('Hello!');
  }

  get hostname() {
    return window.location.host;
  }
}

export default HelloWorld;
