import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
function Header(){
    return <header>
        <nav>
            <div class="menu">
                <ul>
                    <div class = "logo"></div>
                    <li><a href="#">�샇�뒪�듃媛� �릺�뼱蹂댁�?�슂</a></li>
                    <li><a href="#">�룄���留�?</a></li>
                    <li><a href="#">�쉶�썝媛��엯</a></li>
                    <li><a href="#">濡쒓?���씤</a></li>
                </ul>
            </div>
        </nav>
        <section>
            <div class="search__box">

                <div class="search__title">
                    �듅�깋 �엳�뒗 �닕�냼���? 利먭�?<br />嫄곕?��?���? �삁�빟�븯�꽭�슂.
                </div>
                <table>
                    <tr>
                        <td colspan="2" class="search__sub__title">
                            紐⑹?��吏�
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input class="search__input" type="text" placeholder="  紐⑤뱺�?��移�">
                        </input></td>
                    </tr>
                    <tr>
                        <td class="search__sub__title">泥댄겕�?��</td>
                        <td class="search__sub__title">泥댄겕�븘�?��</td>
                    </tr>
                    <tr>
                        <td><input class="search__input" type = "date" /></td>
                        <td><input class="search__input" type = "date" /></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="search__sub__title">�씤�썝</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <select class="search__input">
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <div class="search__button">
                    <button>寃��깋</button>
                </div>
            </div>
        </section>
    </header>
}

function Main(){
    return <main>
        <section>
        <div class="sec__title">�뿉�뼱?��꾩븻?���? �몮�윭蹂닿�?</div>

        <div class="card__box">
            <div class="card">
                <div class="card__img"> </div>
                <div class="card__content">�닕�냼 諛� ?����?���겕 �샇��??</div>
            </div>
            <div class="card">
                <div class="card__img"> </div>
                <div class="card__content">�듃?���?</div>
            </div>
            <div class="card">
                <div class="card__img"> </div>
                <div class="card__content">�뼱�뱶踰ㅼ�?</div>
            </div>
            <div class="card">
                <div class="card__img"> </div>
                <div class="card__content">�젅�뒪�넗�옉</div>
            </div>
        </div>
        </section>

        <section>
        <div class="ad1">

        </div>
        </section>

        <section>
        <div class="sec__title">?��붿쿇 �뿬�뻾吏�</div>
        <div class="choo__box">
            <div class="choo__img"></div>
            <div class="choo__img"></div>
            <div class="choo__img"></div>
            <div class="choo__img"></div>
            <div class="choo__img"></div>
        </div>
        </section>

        <section>
        <div class="sec__title">�뿉�뼱?��꾩븻?���? �뵆�윭�뒪?���? 留뚮굹蹂?���?�슂!</div>
        <div class="sec__content">��꾨━�떚���? �씤��?�由?�뼱 �뵒�옄�씤�씠 寃�利앸�? �닕�냼 ??�щ젆��??</div>
        <div class="ad2"> </div>
        </section>

        <section>
        <div class="sec__title">�쟾 �꽭??�� �닕�냼</div>
        <div class="home__box">

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">�삤�몢留� �? BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">�쁾�쁾�쁾�쁾�쁾</span>
                        <span class="count">185</span>
                        <span class="type">�뒋�띁�샇�뒪�듃</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">�삤�몢留� �? BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">�쁾�쁾�쁾�쁾�쁾</span>
                        <span class="count">185</span>
                        <span class="type">�뒋�띁�샇�뒪�듃</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">�삤�몢留� �? BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">�쁾�쁾�쁾�쁾�쁾</span>
                        <span class="count">185</span>
                        <span class="type">�뒋�띁�샇�뒪�듃</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">�삤�몢留� �? BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">�쁾�쁾�쁾�쁾�쁾</span>
                        <span class="count">185</span>
                        <span class="type">�뒋�띁�샇�뒪�듃</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">�삤�몢留� �? BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">�쁾�쁾�쁾�쁾�쁾</span>
                        <span class="count">185</span>
                        <span class="type">�뒋�띁�샇�뒪�듃</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">�삤�몢留� �? BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">�쁾�쁾�쁾�쁾�쁾</span>
                        <span class="count">185</span>
                        <span class="type">�뒋�띁�샇�뒪�듃</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">�삤�몢留� �? BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">�쁾�쁾�쁾�쁾�쁾</span>
                        <span class="count">185</span>
                        <span class="type">�뒋�띁�샇�뒪�듃</span>
                    </div>
                </div>
            </div>

            <div class="home">
                <div class="home__img"> </div>
                <div class="home_info">
                    <div class="info1">�삤�몢留� �? BALIAN BEACH, BALI</div>
                    <div class="info2">BALIAN TREEHOUSE w beautiful pool</div>
                    <div class="info3">
                        <span class="star">�쁾�쁾�쁾�쁾�쁾</span>
                        <span class="count">185</span>
                        <span class="type">�뒋�띁�샇�뒪�듃</span>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </main>
}


function TopButton() {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        console.log(window.scrollY)
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return showButton && (
        <div className="scroll__container">
            <button id="top" onClick={scrollToTop} type="button" > Top</button>
        </div>

    )
}

function App() {
  return (
        <div>
            <div id="loginAlert" onClick={() => alert('환영합니다.')}>이곳을 눌러보세요</div>
            <Header></Header>
            <Main></Main> 
            <TopButton></TopButton>
            
        </div>

  );
}

export default App;