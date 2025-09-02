<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>검색 결과 - 고객센터</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/customer-center/style.css">
</head>
<body>
<%@ include file="/WEB-INF/views/common/header.jsp" %>

<div class="container">
    <h1>검색 결과</h1>
    <p>"${keyword}" 검색 결과 (총 ${posts.totalElements}건)</p>
    
    <div class="search-form">
        <form method="get" action="${pageContext.request.contextPath}/customer-center/search">
            <input type="text" name="keyword" value="${keyword}" placeholder="제목이나 내용을 검색하세요" required>
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
            </tr>
        </c:forEach>
        </tbody>
    </table>
    
    <!-- 페이징 -->
    <div class="pagination">
        <c:if test="${posts.hasPrevious()}">
            <a href="?keyword=${keyword}&page=${posts.number - 1}&size=${posts.size}">이전</a>
        </c:if>
        <span>페이지 ${posts.number + 1} / ${posts.totalPages}</span>
        <c:if test="${posts.hasNext()}">
            <a href="?keyword=${keyword}&page=${posts.number + 1}&size=${posts.size}">다음</a>
        </c:if>
    </div>
    
    <div class="actions">
        <a href="${pageContext.request.contextPath}/customer-center" class="btn-secondary">고객센터로</a>
    </div>
</div>

<%@ include file="/WEB-INF/views/common/footer.jsp" %>
</body>
</html>
