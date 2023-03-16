import React, { useEffect, useState } from 'react';
import './View.css';
import dummy from "./data.json";


function View() {
    const text=1;
    const pList = dummy.titles.filter(titlecontent => (titlecontent.text === text));

    const [progress, setProgress] = useState(false);

    const [BtnColorRed, setBtnColorRed] = useState(false);


/*
    const [local, setLocal] = useState([])

    const dispatch = useDispatch()
    const comments = useSelector(state => state.comment)
    const [commentValue, setCommentValule] = useState('')
    const [text1, setText1] = useState('')
    const [display, setDisplay] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        setCommentValule(text1)
        let data = {
            content: text1,
            writer: 'jamong',
            postId: '123123',
            responseTo: 'root',
            commentId: uuid()
        }
        //dispatch(addComment(data))

        setText1('')
    }
    useEffect(() => {
        localStorage.setItem('reply', JSON.stringify(comments))
        setLocal(comments.filter(comment => comment.responseTo === 'root'))
    }, [comments])

*/
    return (
        <div className='detail'>
            <div className='content_4'>
                <div className='content_4_a'>
                    <div>
                        <button className={progress ? "falseBtn" : "cbtn"} onClick={() => {
                            setProgress(!progress);
                            setBtnColorRed(!BtnColorRed);
                        }}>
                            {progress ? "모집완료" : "모집중"}
                            {/* <cbtn style={progress ? {color:'green'} : {color:'red'}}></cbtn> */}
                        </button>
                    </div>                    
                </div>
                    
                <div className='content_4_b'>
                    <input type='button' value='수정'/>
                    <input type='button' value='삭제'/>
                </div>
            </div>

            <div className='content_1'>
                <div>제목</div>
            </div>

            <div className='content_2'>
                <div className='content_2_a'>
                    <div>작성자</div>
                    <div>|</div>
                    <div>날짜</div>
                </div>
                <div className='content_2_c'>
                    <div></div>
                </div>
                <div className='content_2_b'>
                    <div></div>
                </div>
            </div>

            <div className='content_5'>
                <div className='content_5_a'>
                    <div>모집인원</div>
                    <div>시작 예정일</div>
                </div>
                <div className='content_5_b'>
                    <div>진행기간</div>
                    <div>태그</div>
                </div>
            </div>

            <div className='content_3'>
                <div>내용</div>
            </div>

            <div className='content_6'>
                <input type='text' className='reply_input' placeholder='댓글 내용을 입력해주세요.' />
                <div className='reply_choose'>
                    <input type='checkbox'></input>
                    <text className='rc1'>비밀댓글</text>
                    <input type='button' className='sbtn' value='등록'></input>
                </div>
               
            </div>
            <div className='rr_reply'>
                <table>
                    <thead>
                        <tr className='replyName'>
                            <th></th>
                            <th>닉네임</th>
                            <th>댓글 내용</th>
                            <th>날짜</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr className="replyTitle">
                            <th>프로필 이미지</th>
                            <th>초록풀</th>
                            <th>리액트 공부 같이하고 싶습니다</th>
                            <th>작성된 날짜</th>
                            <th>
                                <input type="button" className='rrbtn' value="답장"></input>
                                <input type="button" className='rdbtn' value="삭제"></input>
                                <input type="button" className='rmbtn' value="수정"></input>
                            </th>
                           

                        </tr>
                    </tbody>
                </table>
            
            
            
            
            
            {/*
                    <Stack sx={{ m: 5 }}>
                        <Box onSubmit={onSubmit}
                            component="form"
                        >
                            <TextField
                                onChange={(e) => { setText1(e.target.value) }}
                                placeholder="답변 추가"
                                value={text1}
                                id="outlined-size-small"
                                size="small"
                                variant="standard"
                                sx={{ width: '30rem' }}
                            />
                        </Box>

                        {local.map((comment, index) => (

                            <Box sx={{ m: 2 }} key={comment.commentId}>
                                <Stack direction="row" spacing={2}>
                                    <Avatar sx={{ bgcolor: 'orangered' }}>{comment.writer.slice(0, 2)}</Avatar>
                                    <Box sx={{ color: 'gray' }}>{comment.writer}</Box>
                                </Stack>
                                <Box key={index} sx={{ padding: "20px 20px" }}>{comment.content}</Box>
                                <ReplyComment responseTo={comment.commentId} />
                                <hr style={{ borderTop: '1px solid gray' }} />
                            </Box >
                        ))}
                        </Stack >*/}

                </div>

        </div>
    );
}

export default View;

/*


<input type='number' id='number' classname='number'></input>
<input type='button' value='취소' id='cancel' className='cancel' onClick={onReset}/>
<input type='button' value='모집중' id='view_list_button1' />
<input type={text} />

*/


/*
<dlv className='secret_reply'>
                    <div>비밀댓글</div>
                    <input type='button' value="등록">등록</input>
                </dlv>

*/