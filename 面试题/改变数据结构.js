/*数据转换*/

let result = {
    "code": 1,
    "result": [
        {
            "voteId": 1,
            "des": "",
            "title": "去哪玩",
            "endTime": "2019-09-20 17:12:19",
            "anonymous": 0,
            "radio": 1,
            "userId": 1000,
            "chooseId": 1,
            "chooseCount": null,
            "chooseContent": "选项一"
        }, {
            "voteId": 1,
            "des": "",
            "title": "去哪玩",
            "endTime": "2019-09-20 17:12:19",
            "anonymous": 0,
            "radio": 1,
            "userId": 1000,
            "chooseId": 2,
            "chooseCount": null,
            "chooseContent": "选项二"
        }, {
            "voteId": 1,
            "des": "",
            "title": "去哪玩",
            "endTime": "2019-09-20 17:12:19",
            "anonymous": 0,
            "radio": 1,
            "userId": 1000,
            "chooseId": 3,
            "chooseCount": null,
            "chooseContent": "选项三"
        }, {
            "voteId": 2,
            "des": "好看的~",
            "title": "你喜欢什么样的女生",
            "endTime": "2019-09-20 09:11:49",
            "anonymous": 1,
            "radio": 0,
            "userId": 1000,
            "chooseId": 4,
            "chooseCount": null,
            "chooseContent": "选项一"
        }, {
            "voteId": 2,
            "des": "好看的~",
            "title": "你喜欢什么样的女生",
            "endTime": "2019-09-20 09:11:49",
            "anonymous": 1,
            "radio": 0,
            "userId": 1000,
            "chooseId": 5,
            "chooseCount": null,
            "chooseContent": "选项二"
        }, {
            "voteId": 2,
            "des": "好看的~",
            "title": "你喜欢什么样的女生",
            "endTime": "2019-09-20 09:11:49",
            "anonymous": 1,
            "radio": 0,
            "userId": 1000,
            "chooseId": 6,
            "chooseCount": null,
            "chooseContent": "选项三"
        }]
};


function returnNewList(list) {

    let newList = [];
    list.forEach((item, index) => {
            /*
            * 1:
            *
            * 2:
            * */
            for (let i = 0; i < newList.length; i++) {
                if (item.voteId === newList[i].voteId) {
                    newList[i].chooseList.push({
                        chooseId: item.chooseId,
                        chooseCount: item.chooseCount,
                        chooseContent: item.chooseContent

                    });
                    return;
                }

            }


        /*每次Id*/
        newList.push({
            voteId: item.voteId,
            des: item.des,
            title: item.title,
            endTime: item.endTime,
            anonymous: item.anonymous,
            radio: item.radio,
            userId: item.userId,
            chooseList: [{
                chooseId: item.chooseId,
                chooseCount: item.chooseCount,
                chooseContent: item.chooseContent

            }]
        })

    });


    return newList

}


let newList = returnNewList(result.result);

console.log(newList);


let newResult = {
    "code": 1,
    "result": [
        {
            "voteId": 1,
            "des": "",
            "title": "去哪玩",
            "endTime": "2019-09-20 17:12:19",
            "anonymous": 0,
            "radio": 1,
            "userId": 1000,
            "chooseList": [

                {
                    "chooseId": 1,
                    "chooseCount": null,
                    "chooseContent": "选项一"
                },
                {
                    "chooseId": 2,
                    "chooseCount": null,
                    "chooseContent": "选项二"
                },
                {
                    "chooseId": 3,
                    "chooseCount": null,
                    "chooseContent": "选项三"
                }
            ]
        }, {
            "voteId": 2,
            "des": "好看的~",
            "title": "你喜欢什么样的女生",
            "endTime": "2019-09-20 09:11:49",
            "anonymous": 1,
            "radio": 0,
            "userId": 1000,
            "chooseList": [

                {
                    "chooseId": 4,
                    "chooseCount": null,
                    "chooseContent": "选项一"
                },
                {
                    "chooseId": 5,
                    "chooseCount": null,
                    "chooseContent": "选项二"
                }, {
                    "chooseId": 6,
                    "chooseCount": null,
                    "chooseContent": "选项三"
                }
            ]

        }]
};
