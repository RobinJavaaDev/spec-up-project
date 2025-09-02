<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>게시글 수정 - 고객센터</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/customer-center/style.css">
</head>
<body>
<%@ include file="/WEB-INF/views/common/header.jsp" %>

<div class="container">
    <h1>게시글 수정</h1>
    
    <form method="post" action="${pageContext.request.contextPath}/customer-center/post/${post.postId}/edit" class="post-form">
        <div class="form-group">
            <label for="title">제목:</label>
            <input type="text" id="title" name="title" value="${post.title}" required maxlength="100" class="form-control">
        </div>
        
        <div class="form-group">
            <label for="content">내용:</label>
            <textarea id="content" name="content" required rows="10" class="form-control">${post.content}</textarea>
        </div>
        
        <c:if test="${isAdmin}">
            <div class="form-group">
                <label>
                    <input type="checkbox" name="isNotice" value="true" ${post.isNotice ? 'checked' : ''}>
                    공지사항으로 등록
                </label>
            </div>
        </c:if>
        
        <div class="form-actions">
            <button type="submit" class="btn-primary">수정</button>
            <a href="${pageContext.request.contextPath}/customer-center/post/${post.postId}" class="btn-secondary">취소</a>
        </div>
    </form>
</div>

<%@ include file="/WEB-INF/views/common/footer.jsp" %>
</body>
</html>
