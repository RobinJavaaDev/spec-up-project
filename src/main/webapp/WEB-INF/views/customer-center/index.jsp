<!-- src/main/webapp/WEB-INF/views/customer-center/index.jsp -->
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>고객센터</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/customer-center/style.css">
</head>
<body>
<%@ include file="/WEB-INF/views/common/header.jsp" %>

<div class="container">
    <h1>고객센터</h1>

    <!-- 메시지 표시 -->
    <c:if test="${not empty message}">
        <div class="alert alert-success">${message}</div>
    </c:if>
    <c:if test="${not empty error}">
        <div class="alert alert-error">${error}</div>
    </c:if>

    <!-- FAQ 섹션 -->
    <section id="faq">
        <h2>자주 묻는 질문</h2>
        <div class="faq-list">
            <c:forEach var="faq" items="${faqs}">
                <div class="faq-item">
                    <h4>Q: ${faq.question}</h4>
                    <p>A: ${faq.answer}</p>
                    <c:if test="${isAdmin}">
                        <form method="post" action="${pageContext.request.contextPath}/customer-center/faq/${faq.faqId}/delete" style="display:inline;">
                            <button type="submit" class="btn-delete" onclick="return confirm('삭제하시겠습니까?')">삭제</button>
                        </form>
                    </c:if>
                </div>
            </c:forEach>
        </div>

        <!-- 관리자만 FAQ 등록 가능 -->
        <c:if test="${isAdmin}">
            <div class="faq-form">
                <h3>FAQ 등록</h3>
                <form method="post" action="${pageContext.request.contextPath}/customer-center/faq">
                    <div class="form-group">
                        <label>질문:</label>
                        <input type="text" name="question" required>
                    </div>
                    <div class="form-group">
                        <label>답변:</label>
                        <textarea name="answer" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn-primary">FAQ 등록</button>
                </form>
            </div>
        </c:if>
    </section>

    <!-- 공지사항 섹션 -->
    <section id="notices">
        <h2>공지사항</h2>
        <ul class="notice-list">
            <c:forEach var="notice" items="${notices}">
                <li>
                    <a href="${pageContext.request.contextPath}/customer-center/post/${notice.postId}">
                        [공지] ${notice.title}
                    </a>
                    <span class="date">${notice.createdAt}</span>
                </li>
            </c:forEach>
        </ul>
    </section>

    <!-- 게시판 섹션 -->
    <section id="posts">
        <h2>
            <c:choose>
                <c:when test="${isAdmin}">문의 게시판 (전체 관리)</c:when>
                <c:otherwise>내 문의내역</c:otherwise>
            </c:choose>
        </h2>

        <c:if test="${isLoggedIn}">
            <div class="write-button">
                <a href="${pageContext.request.contextPath}/customer-center/write" class="btn-primary">글쓰기</a>
            </div>
        </c:if>
        <!-- 검색 폼 (게시판 섹션 상단에 추가) -->
        <div class="search-form">
            <form method="get" action="${pageContext.request.contextPath}/customer-center/search">
                <input type="text" name="keyword" placeholder="제목이나 내용을 검색하세요" required>
                <button type="submit">검색</button>
            </form>
        </div>

        <table class="post-table">
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <c:if test="${isAdmin}">
                    <th>관리</th>
                </c:if>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="post" items="${posts.content}">
                <tr>
                    <td>${post.postId}</td>
                    <td>
                        <a href="${pageContext.request.contextPath}/customer-center/post/${post.postId}">
                            <c:if test="${post.isNotice}">[공지] </c:if>
                            ${post.title}
                        </a>
                    </td>
                    <td>${post.writer.username}</td>
                    <td>${post.createdAt}</td>
                    <c:if test="${isAdmin}">
                        <td>
                            <form method="post" action="${pageContext.request.contextPath}/customer-center/post/${post.postId}/delete" style="display:inline;">
                                <button type="submit" class="btn-delete" onclick="return confirm('삭제하시겠습니까?')">삭제</button>
                            </form>
                        </td>
                    </c:if>
                </tr>
            </c:forEach>
            </tbody>
        </table>

        <!-- 페이징 -->
        <div class="pagination">
            <c:if test="${posts.hasPrevious()}">
                <a href="?page=${posts.number - 1}&size=${posts.size}">이전</a>
            </c:if>
            <span>페이지 ${posts.number + 1} / ${posts.totalPages}</span>
            <c:if test="${posts.hasNext()}">
                <a href="?page=${posts.number + 1}&size=${posts.size}">다음</a>
            </c:if>
        </div>
    </section>

    <!-- 개발용 로그인 (실제 서비스에서는 제거) -->
    <div style="margin-top: 50px; padding: 20px; background: #f0f0f0;">
        <h3>개발용 로그인</h3>
        <a href="${pageContext.request.contextPath}/customer-center/dev-login?userId=1&role=USER">일반사용자로 로그인</a> |
        <a href="${pageContext.request.contextPath}/customer-center/dev-login?userId=999&role=ADMIN">관리자로 로그인</a>
    </div>
</div>

<%@ include file="/WEB-INF/views/common/footer.jsp" %>
</body>
</html>
