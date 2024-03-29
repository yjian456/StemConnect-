<html>
  <head>
    <title>activity_lockscreen.xml</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <style type="text/css">
        .s0 {color: #2C0735;}
.s1 {color: #858AE3;}
.s2 {color: #613DC1;}
.s3 {color: #4E148C;}
</style>
</head>
    <body bgcolor="#2b2b2b">
      <table CELLSPACING=0 CELLPADDING=5 COLS=1 WIDTH="100%" BGCOLOR="#606060" >
<tr><td><center>
        <font face="Arial, Helvetica" color="#000000">
          activity_lockscreen.xml</font>
      </center></td></tr></table>
    <pre><span class="s0">&lt;?</span><span class="s1">xml version</span><span class="s2">=&quot;1.0&quot; </span><span class="s1">encoding</span><span class="s2">=&quot;utf-8&quot;</span><span class="s0">?&gt;</span>

      <span class="s0">&lt;androidx.constraintlayout.widget.ConstraintLayout </span><span class="s1">xmlns:android</span><span class="s2">=&quot;http://schemas.android.com/apk/res/android&quot;</span>
      <span class="s1">xmlns:app</span><span class="s2">=&quot;http://schemas.android.com/apk/res-auto&quot;</span>
      <span class="s1">xmlns:tools</span><span class="s2">=&quot;http://schemas.android.com/tools&quot;</span>
      <span class="s1">android:layout_width</span><span class="s2">=&quot;match_parent&quot;</span>
      <span class="s1">android:layout_height</span><span class="s2">=&quot;match_parent&quot;</span>
      <span class="s1">android:background</span><span class="s2">=&quot;@drawable/gradient2&quot;</span>
      <span class="s1">tools:context</span><span class="s2">=&quot;.MainActivity&quot;</span><span class="s0">&gt;</span>

      <span class="s0">&lt;TextView</span>
      <span class="s1">android:id</span><span class="s2">=&quot;@+id/textView2&quot;</span>
      <span class="s1">android:layout_width</span><span class="s2">=&quot;wrap_content&quot;</span>
      <span class="s1">android:layout_height</span><span class="s2">=&quot;wrap_content&quot;</span>
      <span class="s1">android:fontFamily</span><span class="s2">=&quot;sans-serif-medium&quot;</span>
      <span class="s1">android:text</span><span class="s2">=&quot;login&quot;</span>
      <span class="s1">android:textAllCaps</span><span class="s2">=&quot;true&quot;</span>
      <span class="s1">android:textColor</span><span class="s2">=&quot;#FFFFFF&quot;</span>
      <span class="s1">android:textSize</span><span class="s2">=&quot;24sp&quot;</span>
      <span class="s1">app:layout_constraintBottom_toBottomOf</span><span class="s2">=&quot;parent&quot;</span>
      <span class="s1">app:layout_constraintEnd_toEndOf</span><span class="s2">=&quot;parent&quot;</span>
      <span class="s1">app:layout_constraintStart_toStartOf</span><span class="s2">=&quot;parent&quot;</span>
      <span class="s1">app:layout_constraintTop_toTopOf</span><span class="s2">=&quot;parent&quot;</span>
      <span class="s1">app:layout_constraintVertical_bias</span><span class="s2">=&quot;0.062&quot; </span><span class="s0">/&gt;</span>

      <span class="s0">&lt;LinearLayout</span>
      <span class="s1">android:layout_width</span><span class="s2">=&quot;408dp&quot;</span>
      <span class="s1">android:layout_height</span><span class="s2">=&quot;617dp&quot;</span>
      <span class="s1">android:layout_marginStart</span><span class="s2">=&quot;64dp&quot;</span>
      <span class="s1">android:layout_marginLeft</span><span class="s2">=&quot;64dp&quot;</span>
      <span class="s1">android:layout_marginTop</span><span class="s2">=&quot;52dp&quot;</span>
      <span class="s1">android:layout_marginEnd</span><span class="s2">=&quot;32dp&quot;</span>
      <span class="s1">android:layout_marginRight</span><span class="s2">=&quot;32dp&quot;</span>
      <span class="s1">android:orientation</span><span class="s2">=&quot;vertical&quot;</span>
      <span class="s1">app:layout_constraintEnd_toEndOf</span><span class="s2">=&quot;parent&quot;</span>
      <span class="s1">app:layout_constraintHorizontal_bias</span><span class="s2">=&quot;0.677&quot;</span>
      <span class="s1">app:layout_constraintStart_toStartOf</span><span class="s2">=&quot;parent&quot;</span>
      <span class="s1">app:layout_constraintTop_toBottomOf</span><span class="s2">=&quot;@+id/textView2&quot;</span><span class="s0">&gt;</span>

      <span class="s0">&lt;EditText</span>
      <span class="s1">android:id</span><span class="s2">=&quot;@+id/editText&quot;</span>
      <span class="s1">android:layout_width</span><span class="s2">=&quot;match_parent&quot;</span>
      <span class="s1">android:layout_height</span><span class="s2">=&quot;wrap_content&quot;</span>
      <span class="s1">android:ems</span><span class="s2">=&quot;10&quot;</span>
      <span class="s1">android:foregroundTint</span><span class="s2">=&quot;#FFFFFF&quot;</span>
      <span class="s1">android:hint</span><span class="s2">=&quot;Your Email&quot;</span>
      <span class="s1">android:inputType</span><span class="s2">=&quot;textPersonName&quot;</span>
      <span class="s1">android:textColorHint</span><span class="s2">=&quot;#FFFFFF&quot; </span><span class="s0">/&gt;</span>

      <span class="s0">&lt;EditText</span>
      <span class="s1">android:id</span><span class="s2">=&quot;@+id/editText2&quot;</span>
      <span class="s1">android:layout_width</span><span class="s2">=&quot;match_parent&quot;</span>
      <span class="s1">android:layout_height</span><span class="s2">=&quot;wrap_content&quot;</span>
      <span class="s1">android:layout_marginTop</span><span class="s2">=&quot;8dp&quot;</span>
      <span class="s1">android:ems</span><span class="s2">=&quot;10&quot;</span>
      <span class="s1">android:foregroundTint</span><span class="s2">=&quot;#FFFFFF&quot;</span>
      <span class="s1">android:hint</span><span class="s2">=&quot;Password&quot;</span>
      <span class="s1">android:inputType</span><span class="s2">=&quot;textPersonName&quot;</span>
      <span class="s1">android:textColorHint</span><span class="s2">=&quot;#FFFFFF&quot; </span><span class="s0">/&gt;</span>

      <span class="s0">&lt;Button</span>
      <span class="s1">android:id</span><span class="s2">=&quot;@+id/button&quot;</span>
      <span class="s1">android:layout_width</span><span class="s2">=&quot;match_parent&quot;</span>
      <span class="s1">android:layout_height</span><span class="s2">=&quot;wrap_content&quot;</span>
      <span class="s1">android:layout_marginTop</span><span class="s2">=&quot;48dp&quot;</span>
      <span class="s1">android:background</span><span class="s2">=&quot;@drawable/button&quot;</span>
      <span class="s1">android:text</span><span class="s2">=&quot;Login&quot;</span>
      <span class="s1">android:textColorHighlight</span><span class="s2">=&quot;#FFFFFF&quot; </span><span class="s0">/&gt;</span>

      <span class="s0">&lt;/LinearLayout&gt;</span>

      <span class="s0">&lt;/androidx.constraintlayout.widget.ConstraintLayout&gt;</span>


    </pre>
</body>
</html>