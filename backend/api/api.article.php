<?php

header('Acess-Control-Allow-Origin: *');
// header('Content-Type: application/javascript');
header('Content-Type: application/json');

require_once("../includes/initialize.php");

$articledetails= Article::find_all();
// pr($articledetails);
$request_method = $_SERVER['REQUEST_METHOD'];

$mainarticle='';
$mainhtml='';
if ($request_method == 'GET') {
    if (empty($articledetails)) { http_response_code(405); echo json_encode(array("action" => "error", "message" => "data is empty.")); exit(); }
    // console.log("action");
if(!empty($articledetails)){

$post_arr =array();
foreach($articledetails as $articledetail){
//     $mainhtml= htmlentities($articledetail->content);
//     $dom = new DOMDocument;
// @$dom->loadHTML($mainhtml);
// pr($dom);
    
    if ($articledetail->image != "a:0:{}") {
        $imageList = unserialize($articledetail->image);
        // $imgno = array_rand($imageList);
        $file_path = SITE_ROOT . 'images/articles/' . $imageList[0];
        // pr($file_path);
        if (file_exists($file_path)) {
            $imglink = IMAGE_PATH . 'articles/' . $imageList[0];
        } else {
            $imglink = BASE_URL . 'template/web/img/mosaic_2.jpg';
        }
    } else {
        $imglink = BASE_URL . 'template/cms/img/mosaic_2.jpg';
    }

 // $dataArray = [
    //     ["id" => 1, "name" => "Alice"],
    //     ["id" => 2, "name" => "Bob"],
    //     ["id" => 3, "name" => "Charlie"]
    // ];
    // // Start constructing the JavaScript code as a string
    // $jsCode = "const dataArray = [";
    // // Loop through the PHP array to build the JavaScript array with backticks
    // foreach ($dataArray as $item) {
        // $jsCode .= "{ \"id\": {$item['id']}, \"name\": `{$item['name']}` },";
    // }
    // // Remove the trailing comma and close the array
    // $jsCode = rtrim($jsCode, ',') . "];";
    // echo $jsCode;

    // echo 'const dataArray = ' . json_encode($dataArray) . ';';

    // $mainarticle = "{ 
    //     \"id\": {$articledetail['id']}, 
    //     \"html\": `{$articledetail['content']}` 
    
    // },";
    $content= strip_tags($articledetail->content,'');

    // $page_content = preg_replace('/<(pre)(?:(?!<\/\1).)*?<\/\1>/s','',$content);
    // $page_content = str_replace(array('<pre>', '</pre>'), '', $content); 
    // $page_content= preg_replace('/<\/?pre>/', '', $content);
    // $dom = new DOMDocument();
    // libxml_use_internal_errors(true); // To suppress warnings about invalid HTML
    // $dom->loadHTML($content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
    // libxml_clear_errors();
    
    // $preTags = $dom->getElementsByTagName('pre');
    
    // while ($preTags->length > 0) {
    //     $preTag = $preTags->item(0);
    //     $parent = $preTag->parentNode;
    //     while ($preTag->firstChild) {
    //         $parent->insertBefore($preTag->firstChild, $preTag);
    //     }
    //     $parent->removeChild($preTag);
    // }
    // pr($dom->saveHTML());
    // $mcontent= strip_tags($dom->saveHTML());
    // pr($mcontent);
    // echo $dom->saveHTML();
    // pr($content);
    // $content_encode= utf8_encode($content);


    // Create a new DOMDocument instance
$dom = new DOMDocument();
libxml_use_internal_errors(true); // Suppress warnings about invalid HTML
$dom->loadHTML($content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
libxml_clear_errors();

// Get all <pre> tags
$preTags = $dom->getElementsByTagName('pre');

// Iterate through all <pre> tags and remove them
while ($preTags->length > 0) {
    $preTag = $preTags->item(0);
    
    $parent = $preTag->parentNode;
  

    // Move all child nodes of <pre> to its parent node
    while ($preTag->firstChild) {
        $parent->insertBefore($preTag->firstChild, $preTag);
    }

    // Remove the <> tag from the parent node
    $parent->removeChild($preTag);
    
}

// Get the cleaned HTML string
$cleanedString = $dom->saveHTML();
$mcontent= strip_tags($cleanedString,'');

$cleaned_string = strip_tags($content);

// If <pre> tags are still present, use regular expressions to remove them
$cleaned_string = preg_replace('/<pre[^>]*>(.*?)<\/pre>/is', 'a', $cleaned_string);

$mainarticle= array(
    'id' => $articledetail->id,
    'title' => $articledetail->title,
    'sub_title' => $articledetail->sub_title,
    'slug' => $articledetail->slug,
    'status' => $articledetail->status ,
    'content' => $cleaned_string,
    'sortorder' => $articledetail->sortorder,
    'image' =>  $imglink,

);
 $mainhtml .= "{  \"html\": `{$articledetail->content}` },";
 $mainhtml = str_replace( '\\','',$mainhtml,) . "];";
// $post_arr[$mainarticle['slug']]= array(); ;

array_push($post_arr, $mainarticle);

}
// echo json_encode(array('message'=>'Data Found'),$post_arr);
echo 'const historyData = ' . json_encode($post_arr) . ';';
// echo json_encode($post_arr);
}
else{
    echo json_encode(array('message'=>'no data found'));
}
}

?>