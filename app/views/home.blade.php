<!doctype html>
<html lang="en">
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<!--link rel="shortcut icon" href="favicon.ico" /-->
	{{ HTML::style('bower_components/bootstrap/dist/css/bootstrap.min.css') }}
	{{ HTML::style('css/index.css') }}
</head>
<body>

<div id="slideshow" class="carousel slide" data-ride="carousel" data-interval="7000">
  <?php /*
  <ol class="carousel-indicators">
    <li data-target="#slideshow" data-slide-to="0" class="active"></li>
    <li data-target="#slideshow" data-slide-to="1"></li>
  </ol>
  */ ?>

  <div class="carousel-inner">
    @for($i = $group; $i > 0; $i--)
      <?php
      $active = $i == $group ? 'active' : '';
      ?>
      <div class="item {{ $active }}">
        <img src="{{ URL::asset('files/'.$i.'-1.jpg') }}" />
      </div>
    @endfor    
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#slideshow" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#slideshow" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>

<div id="bande">
	<div class="container">
		
		<button type="button" id="btn-grab" class="btn btn-success btn-lg">
      <span class="glyphicon glyphicon-camera"></span>
    </button>

    <h1 class="hidden-xs"><span>Christine</span> et ça bedaine!</h1>

	</div>
</div>

{{ HTML::script('bower_components/jquery/dist/jquery.min.js') }}
{{ HTML::script('bower_components/bootstrap/dist/js/bootstrap.min.js') }}
<script type="text/javascript">
window.wpath = '{{ URL::to('/') }}/';
</script>
{{ HTML::script('js/index.js') }}
</body>
</html>
