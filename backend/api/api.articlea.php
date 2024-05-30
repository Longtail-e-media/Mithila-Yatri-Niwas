<!DOCTYPE html>
<html>
<head>
    <title>PHP to JS Array</title>
</head>
<body>
    <script>
        // JavaScript object representation of the PHP array
        var jsArray = {
            id: "<?php echo $mainarticle['id']; ?>",
            title: "<?php echo $mainarticle['title']; ?>",
            content: "<?php echo $mainarticle['content']; ?>",
           
        };

        console.log(jsArray);
    </script>
</body>
</html>