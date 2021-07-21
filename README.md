# textWildCardArea.js

> A jQuery plugin for textarea to add and remove wildcards from text

## Basic Usage

### Declare a textarea and declare a list of tags to use with UL LI

```html
 <textarea id="MyTextWildCardArea"></textarea>
 <nav>
    <ul data-toggle="tag" data-target="#MyTextWildCardArea">
        <li class="nav-item"><a class="tag tag--available" data-tag="[ExampleTag]" role="button">[ExampleTag]</a></li>
        <li class="nav-item"><a class="tag tag--available" data-tag="[Email]" role="button">[Email]</a></li>
    </ul>
</nav>

```

```js
$('#MyTextWildCardArea').textWildCardArea();
```


#### It is also possible to instantiate with many text areas.

```html
 <textarea id="TextAreaExample" class="my-textarea"></textarea>
 <nav>
    <ul data-toggle="tag" data-target="#MyTextWildCardArea">
        <li class="nav-item"><a class="tag tag--available" data-tag="[ExampleTag]" role="button">[ExampleTag]</a></li>
        <li class="nav-item"><a class="tag tag--available" data-tag="[Email]" role="button">[Email]</a></li>
    </ul>
</nav>


<textarea id="AnotherTextArea" class="my-textarea"></textarea>
 <nav>
    <ul data-toggle="tag" data-target="#MyTextWildCardArea">
        <li class="nav-item"><a class="tag tag--available" data-tag="[ExampleTag]" role="button">[ExampleTag]</a></li>
        <li class="nav-item"><a class="tag tag--available" data-tag="[Email]" role="button">[Email]</a></li>
    </ul>
</nav>

```

```js
$('.my-textarea').textWildCardArea();
```


### data attributes
* <strong>data-toggle="tag":</strong> Required: define the type tag for a element  
* <strong>data-target="#elementId":</strong> Required: define the target textarea to observer  

### classes
* <strong>tag tag-available: </strong> the plugin uses this class to control a toggle state. 
* <strong>tag tag-unavailable: </strong> the plugin uses this class to control a toggle state.  
At least one class is required 

The plugin doesn't have css styles, but this css can be useful for a basic style
```css
     .tag.tag--available {
        cursor: pointer;
        font-weight: 700;
    }

    .tag.tag--unavailable {
        cursor: pointer;
        font-weight: normal;
        font-style: italic;
        text-decoration: line-through;
    }
 ```


## Usability
* Click once for add wildcard to the textarea  
* Click once for remove all wildcards from the textarea  
* If a textarea already has data coming from the server, the plugin must observe and apply the toggle state on the tags

![Image of Example] (https://github.com/raafacachoeira/jquery-text-wildcard-area/blob/main/example-wildcard.PNG?raw=true)


