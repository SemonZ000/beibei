$.ajax(
            {
                url: "你的php",
                type: "POST",
                dataType: "json",
                data: 这里传参数 记得用JSON。s什么的转成JSON字符串用对象,
                success: function (result) {
                    alert(result);
                },
                error: function (xhr, status, p3, p4) {
                    var err = "Error " + " " + status + " " + p3;
                    if (xhr.responseText && xhr.responseText[0] == "{")
                        err = JSON.parse(xhr.responseText).message;
                    alert(err);
                }
            });
        }
        { AlbumName: "shanghai", Entered: "5/9/2013" }