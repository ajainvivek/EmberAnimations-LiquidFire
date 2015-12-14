export default function () {
  var duration = 500;

  this.transition(
    this.fromRoute("teams"),
    this.toRoute("players"),
    this.useAndReverse("explode", {
      matchBy: "data-logo-code",
      use: ["fly-to",  {duration}]
    },{
        use : 'fade'
    })
  );

  this.transition(
    this.childOf(".players"),
    this.use("toLeft",  {duration})
  );

  // this.transition(
  //   this.fromRoute("teams"),
  //   this.toRoute("players"),
  //   this.use("toUp", {duration : duration}),
  //   this.reverse("toDown", {duration : duration})
  // );
}
