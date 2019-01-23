# ViewMoreDirective

This directive version is support to angular 5 i.e angular version 1.7.4.
``` html
<p view-more  viewHeight="60" (showMore)="showMore($event)"> 
....
</p>

```

### properties

view-more-directive is currently have following properties. Details of that properties are given below.

| properties | dataType | details
| ------ | ------ | ------ |
| @Input viewHeight | number | it is the height of your containt you want to show.|
| @Output showMore() | - | return the boolean value when user clicks on view more link.It is true for show more event & false for show less event |

<!-- ### Methods

view-more-directive is currently have following Methods. Details of that Methods are given below.

| Methods | dataType | details
| ------ | ------ | ------ |
| showMore() | number | it is the height of your containt you want to show.| -->

https://github.com/thevaibhavpatil/view-more.directive.git